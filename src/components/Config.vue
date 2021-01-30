<template>
  <div class="container has-text-centered">
    <h1>{{ msg }}</h1>
    <FileSelector></FileSelector>

  </div>
</template>

<script>
import FileSelector from "@/components/FileSelector";

export default {
  name: 'Config',
  props: {
    msg: String
  },
  components: {
    FileSelector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
