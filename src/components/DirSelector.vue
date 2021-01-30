<template>
  <section>
    <b-menu>
      <b-menu-list label="ФАЙЛЫ">
        <b-menu-item v-for="(i, idx) in cList"
                     v-bind:icon="i.isDir ? 'folder' : 'file'"
                     v-bind:key=idx v-bind:label=i.name></b-menu-item>
      </b-menu-list>
    </b-menu>
  </section>
</template>

<script>
import axios from "axios";

export default {
name: "DirSelector",
  props: {
    root: String
  },
  data() {
    return {
      cList: null
    };
  },
  mounted() {
    axios
        .post(' https://labelocalapi2.herokuapp.com/dir', {path: this.root})
        .then(response => (this.cList = response.data.list));
  }
}
</script>

<style scoped>

</style>
