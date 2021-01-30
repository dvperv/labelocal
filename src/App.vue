<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Local Star Labeller
          </h1>
          <figure class="image is-128x128 is-inline-block">
            <img src="./assets/logo.png"/>
          </figure>
        </div>
      </div>
    </section>
    <Config msg="Добро пожаловать"/>
    <section class="hero">
      <div class="container">
        <DirSelector root="/"/>
      </div>
    </section>
    <FileViewer/>
  </div>

</template>

<script>
import Config from './components/Config.vue'
import FileViewer from "@/components/FileViewer";
import DirSelector from "@/components/DirSelector";

export default {
  name: 'App',
  components: {
    DirSelector,
    FileViewer,
    Config
  }
}
</script>

<style>

</style>
