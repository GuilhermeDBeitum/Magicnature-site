<template>
  <v-app id="inspire">
    <!-- imagens para o paralax -->
    <v-row cols="12" md="12" class="back" no-gutters justify="center">
      <v-img>
        <v-parallax height="600" src="..\assets\img\home.webp"> </v-parallax>
      </v-img>
    </v-row>

    <modal />
    <v-col class="back"></v-col>
  </v-app>
</template>

<script>
import modal from "./Modal.vue";
export default {
  name: "home",
  components: {
    modal,
  },
  props: {
    source: String,
  },

  data: () => ({
    dialog: false,
  }),
};
</script>
<style>
.back {
  background-color: black;
}
</style>
