<template>
  <section>
    <b-button @click="clickMe">Show Dir</b-button>

    <div class="container has-text-centered">
      <p>File  Viewer</p>
      <p>{{this.info.res}}</p>
    </div>
  </section>
</template>

<script>
// import ReadFile from '../remote.file.js'

import axios from "axios";

export default {
  name: "FileViewer",
  methods: {
    clickMe() {
      // ReadFile.run()
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/file')
        .then(response => (this.info = response));
  }
}
</script>

<style scoped>

</style>
