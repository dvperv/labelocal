<template>
  <section>
    <div class="container has-text-centered is-fluid ">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <div v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <b-button type="is-primary" icon-left="login" v-if="!$auth.isAuthenticated" @click="login">Log in</b-button>
            <!-- show logout when authenticated -->
            <b-button type="is-primary" outlined icon-left="logout" v-if="$auth.isAuthenticated" @click="logout">Log out</b-button>
          </div>
        </div>
        <div class="column" v-if="$auth.isAuthenticated" >
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
        </div>
        <div class="column"></div>
      </div>
      <div class="columns" v-if="$auth.isAuthenticated">
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
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
