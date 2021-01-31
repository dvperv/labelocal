<template>
  <b-menu>
    <b-button @click="onUp" icon-left="folder-upload-outline" type="is-primary is-light" outlined></b-button>
    <b-menu-list v-if="root" v-bind:label="cRoot" >
      <b-menu-item v-for="(i, idx) in cList"
                   v-bind:key=idx
                   v-bind:icon="i.isDir ? 'folder' : 'file'"
                   v-bind:label="i.name"
                   v-on:dblclick="onDoubleClick(i.name, i.isDir)"
      />
    </b-menu-list>
  </b-menu>
</template>

<script>
import axios from "axios";

export default {
  name: "DirList",
  props: {
    root: String
  },
  data() {
    return {
      cRoot: this.root,
      cList: null,
    };
  },
  mounted() {
    this.cRoot = this.root;
    this.getList();
  },
  methods:{
    onDoubleClick(newRoot, isDir){
      if (isDir) {
        this.cRoot = this.cRoot + (this.cRoot[this.cRoot.length - 1] == '/' ? '' : '/') + newRoot;
        this.getList();
        console.log(this.cRoot);
      }
    },
    getList(){
      if (this.cRoot)
        axios
            .post(' https://labelocalapi2.herokuapp.com/dir', { path: this.cRoot })
            .then(response => (this.cList = response.data.list));
    },
    onUp(){
      this.cRoot = this.getParentPath(this.cRoot);
      this.getList();
      console.log(this.cRoot);
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
