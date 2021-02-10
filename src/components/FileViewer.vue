<template>
  <section>
    <div class="container has-text-centered">
      <h2><strong>Транзиент</strong></h2>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">
          <b-image v-bind:src=picData></b-image>
          <div class="notification is-vcentered">
            <div class="block">
              <b-radio v-model="radio" size="is-large" name="picture_class" native-value="Y" v-on:input="upsert">
                <b-icon icon="check-all" type="is-success"></b-icon>
              </b-radio>
              <b-radio v-model="radio" size="is-large" name="picture_class" native-value="N" v-on:input="upsert">
                <b-icon icon="skull-crossbones-outline" type="is-danger"></b-icon>
              </b-radio>
              <b-radio v-model="radio" size="is-large" name="picture_class" native-value="U" v-on:input="upsert">
                <b-icon icon="help-circle-outline" type="is-warning"></b-icon>
              </b-radio>
              <b-button icon-left="cancel" rounded v-on:click="deleteMeta">Удалить</b-button>
            </div>
            <b-message v-if="metaError" title="Ошибка базы данных" type="is-danger" has-icon aria-close-label="Закрыть">
              При фиксации изменений в базе данных произошла ошибка. Операция фиксации <b>не выполнена</b>.
            </b-message>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import s from "@/services/services";

const apiMetaUrl = 'https://labelocalapi2.herokuapp.com/api/meta';

export default {
  name: "FileViewer",
  props: {
    path: String,
  },
  data() {
    return {
      info: null,
      picData: null,
      meta: null,
      metaError: null,
      radio: null,
    };
  },
  watch: {
    info(){
      let res = new Uint8ClampedArray(this.info.data.grayscale255.length * 4);
      let i = 0;
      this.info.data.grayscale255.forEach(el => {
        res[i]     = el;
        res[i + 1] = el;
        res[i + 2] = el;
        res[i + 3] = 255;
        i += 4;
      });
      let canvas  = document.createElement('canvas');
      canvas.width = this.info.data.npoints;
      canvas.height = this.info.data.nbands + 1;
      let ctx = canvas.getContext('2d');
      ctx.putImageData(new ImageData(res, this.info.data.npoints, this.info.data.nbands + 1),0,0);
      this.picData = canvas.toDataURL('image/png');
    },
  },
  mounted() {
    if(this.path) {
      axios
          .post(' https://labelocalapi2.herokuapp.com/file', {path: this.path})
          .then(response => (this.info = response));
      this.getMeta();
    }
  },
  computed: {
    pathHigh() {
      return this.$store.state.pathHigh
    },
    pathLow() {
      return this.$store.state.pathLow
    },
    fileIndex() { return s.fileIndex(this.path, this.pathHigh, this.pathLow) },
  },
  methods: {
    upsert(){
      if (this.meta) {
        this.meta.label = this.radio;
        this.updateMeta();
      }
      else {
        this.meta = {
          _id: this.fileIndex,
          label: this.radio,
        }
        this.insertMeta();
      }
    },
    getMeta(){ // gets a current metadata for this particular file
      axios
          .get(apiMetaUrl + '/' + this.fileIndex)
          .then(response => {
            this.meta = response.data;
            this.radio = (this.meta ? this.meta.label : null);
            }, reason => {this.metaError = reason});

    },
    insertMeta(){
      axios
          .post(apiMetaUrl, this.meta)
          .then(response => {
            this.meta = response.data;
            this.radio = (this.meta ? this.meta.label : null);
          }, reason => {this.metaError = reason});
    },
    updateMeta(){
      axios
          .put(apiMetaUrl + '/' + this.fileIndex, this.meta)
          .then(response => {
            this.meta = response.data;
            this.radio = (this.meta ? this.meta.label : null);
          }, reason => {this.metaError = reason});
    },
    deleteMeta(){
      axios
          .delete(apiMetaUrl + '/' + this.fileIndex)
          // eslint-disable-next-line no-unused-vars
          .then(response => {
            this.meta = null;
            this.radio = null;
          }, reason => {this.metaError = reason});
    }
  }
}
</script>

<style scoped>

</style>
