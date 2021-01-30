<template>
  <section>
    <b-button @click="clickMe">Show Dir</b-button>

    <div class="container has-text-centered">
      <p>File  Viewer</p>
      <p>{{this.info.grayscale255}}</p>
    </div>
  </section>
</template>

<script>
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
        .get(' https://labelocalapi2.herokuapp.com/file')
        .then(response => (this.info = response));
  }
}
</script>

<style scoped>

</style>
