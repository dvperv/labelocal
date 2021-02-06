<template>
  <section>
    <div class="container has-text-centered is-fluid ">
      <b-collapse aria-id="contentIdForA11y2" class="panel" animation="slide" :open="false">
        <template #trigger>
          <div
              class="panel-heading"
              role="button"
              aria-controls="contentIdForA11y2">
            <strong>
              <b-icon icon="cog" size="is-large"></b-icon>
            </strong>
          </div>
        </template>
        <p class="panel-tabs">
          <a class="is-active">Все</a>
        </p>
        <div class="columns">
          <div class="column">
            <img src="../assets/UnderConstruction200x200.jpg" height="200" width="200"/>
          </div>
          <div class="column is-three-quarters">
              <b-field label="Путь к транзиентам HIGH">
                <b-input v-model="pathHigh"></b-input>
              </b-field>
              <b-field label="Путь к транзиентам LOW">
                <b-input v-model="pathLow"></b-input>
              </b-field>
          </div>
        </div>
      </b-collapse>

      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-quarters">
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
  },
  computed: {
    pathHigh() {
      return this.$store.state.pathHigh
    },
    pathLow() {
      return this.$store.state.pathLow
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
