<template>
  <section>
    <b-button @click="clickMe">Show Dir</b-button>
    <div class="container has-text-centered">
      <p>File  Viewer</p>
      <p v-if="info">1</p>
    </div>
  </section>
</template>

<script>
// import axios from "axios";

export default {
  name: "FileViewer",
  methods: {
    clickMe() {
      console.log('clicked');
    }
  },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    // axios
    //     .get(' https://labelocalapi2.herokuapp.com/file')
    //     .then(response => (this.info = response));
  }
}
</script>

<style scoped>

</style>
