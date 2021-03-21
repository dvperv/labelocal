<template>
  <section>
  <b-menu>
    <b-icon
        icon="file-check-outline"
        size="is-small">
    </b-icon>
      <b-button v-on:click="onUp" icon-left="folder-upload-outline" type="is-primary is-light" outlined></b-button>
      <b-menu-list v-if="root" v-bind:label="cRoot" >
        <b-menu-item v-for="(i, idx) in cList"
                     v-bind:key=idx
                     v-bind:icon="icon(i)"
                     v-bind:label="i.name"
                     v-on:dblclick="onDoubleClick(i.name, i.isDir)"
                     v-on:click="onSelect(i.name)"
                     :active="selected == i.name"
        >
          <FileViewer v-if="!i.isDir && (selected == i.name)" v-bind:path="cRoot + '/' + i.name" ></FileViewer>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </section>
</template>

<script>
import axios from "axios";
import FileViewer from "@/components/FileViewer";
import c from "../config.js"

export default {
  name: "DirList",
  components: {FileViewer},
  props: {
    root: String
  },
  data() {
    return {
      cRoot: this.root,
      cList: null,
      dblClicked: false,
      selected: null,
    };
  },
  mounted() {
    this.$auth.getTokenSilently().then(token => {
      this.headers = {
        Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
      };
      // console.log('Token on mounted:' + this.headers.Authorization)
      this.cRoot = this.root;
      this.getList();
    });
  },
  methods:{
    icon(i){
      if (i.isDir) return 'folder';
      return 'file'
    },
    onDoubleClick(newRoot, isDir){
      if (this.dblClicked) return;
      if (isDir) {
        this.dblClicked = true;
        this.cRoot = this.cRoot + (this.cRoot[this.cRoot.length - 1] == '/' ? '' : '/') + newRoot;
        console.log('New Full Root: ' + this.cRoot);
        this.getList();
        this.dblClicked = false;
      }
    },
    onSelect(s){
      this.selected = s
    },
    getList(){
      if (this.cRoot && this.headers) {
        console.log('Token on getList:' + this.headers.Authorization)
        axios
            .post(`${c.api.path}/dir`, {path: this.cRoot}, {headers: this.headers})
            .then(response => (this.cList = response.data.list));
      }
    },
    onUp(){
      this.cRoot = this.getParentPath(this.cRoot);
      this.getList();
    },
    getParentPath(p){
      if (p) for(let i = p.length - 1; i > 0; i--)
        if (p[i] == '/' && i > 0) return p.slice(0, i);
      return '/'
    }
  }
}
</script>

<style scoped>

</style>
