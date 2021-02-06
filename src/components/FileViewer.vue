<template>
  <section>
    <div class="container has-text-centered">
      <h2><strong>Транзиент</strong></h2>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-quarters">
          <b-image v-bind:src=picData></b-image>
<!--          <img src="https://www.torontozoo.com/img/1200/20180605032116763AfricanLion.jpg">-->
          <div class="notification is-vcentered">
            <div class="block">
              <b-radio v-model="radio" size="is-large" name="picture_class" native-value="yes">
                <b-icon icon="check-all" type="is-success"></b-icon>
              </b-radio>
              <b-radio v-model="radio" size="is-large" name="picture_class" native-value="no">
                <b-icon icon="skull-crossbones-outline" type="is-danger"></b-icon>
              </b-radio>
              <b-radio v-model="radio" size="is-large" name="picture_class" native-value="uncertain">
                <b-icon icon="help-circle-outline" type="is-warning"></b-icon>
              </b-radio>
              <b-button icon-left="cancel" rounded>Удалить</b-button>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {fileIndex} from "@/services/services";

export default {
  name: "FileViewer",
  props: {
    path: String,
  },
  data() {
    return {
      info: null,
      picData: null,
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
      console.log('info length: ' + this.info.data.grayscale255.length +' for: ' + this.path);
      ctx.putImageData(new ImageData(res, this.info.data.npoints, this.info.data.nbands + 1),0,0);
      this.picData = canvas.toDataURL('image/png');
    },
    radio(){
      console.log(this.radio)
      fileIndex(this.path);
      //TODO upsert record
    }
  },
  mounted() {
    if(this.path) {
      axios
          .post(' https://labelocalapi2.herokuapp.com/file', {path: this.path})
          .then(response => (this.info = response));
    }
  }
}
</script>

<style scoped>

</style>
