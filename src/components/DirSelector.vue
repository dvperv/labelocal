<template>
  <section>
    <h2>ФАЙЛЫ</h2>
    <DirList v-bind:root=root></DirList>
  </section>
</template>

<script>
import DirList from "@/components/DirList";

export default {
name: "DirSelector",
  components: {DirList},
  props: {
    root: String
  },
}
</script>

<style scoped>

</style>
