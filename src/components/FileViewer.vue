<template>
  <section>
    <div class="container has-text-centered">
      <h2><strong>Pic</strong></h2>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-quarters">
          <b-image v-bind:src=picData></b-image>
<!--          <img src="https://www.torontozoo.com/img/1200/20180605032116763AfricanLion.jpg">-->
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "FileViewer",
  data() {
    return {
      info: null,
      picData: null,
    };
  },
  watch: {
    info(){
      let res = new Uint8ClampedArray(this.info.data.grayscale255.length * 4);
      let i = 0;
      this.info.data.grayscale255.forEach(el => {
        res[i]     = el;
        res[i + 1] = el;
        res[i + 2] = el;
        res[i + 3] = 255;
        i += 4;
      });
      let canvas  = document.createElement('canvas');
      canvas.width = this.info.data.npoints;
      canvas.height = this.info.data.nbands + 1;
      let ctx = canvas.getContext('2d');
      ctx.putImageData(new ImageData(res, this.info.data.npoints, this.info.data.nbands + 1),0,0);
      this.picData = canvas.toDataURL('image/png');

      console.log('npoints: ', this.info.data.npoints)
      console.log('nbands + 1: ', this.info.data.nbands + 1)
      console.log("Grayscale length x4: ", this.info.data.grayscale255.length * 4)
      console.log("npoints x (nbands + 1): ", this.info.data.npoints * (this.info.data.nbands + 1))
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
