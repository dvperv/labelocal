<template>
  <section>
    <div class="container has-text-centered is-fluid ">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <DirSelector root="/home/dmitriy/transients" class="has-text-left"></DirSelector>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import DirSelector from "@/components/DirSelector";
export default {
  name: 'Config',
  components: {
    DirSelector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
