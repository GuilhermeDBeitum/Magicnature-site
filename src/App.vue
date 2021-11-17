<template>
  <v-app id="inspire">
    <v-row cols="12" no-gutters>
      <v-col cols="12" md="12">
        <v-tabs
          background-color="black"
          height="41"
          color="green"
          centered
          center-active
          dark
          touchless
          grow
        >
          <h1 style="margin-left: 20px">Magic Nature</h1>

          <v-tab to="home" exact> <strong> HOME </strong> </v-tab>
          <v-tab to="sobre"> <strong> SOBRE </strong></v-tab>
          <v-tab to="cadastro"> <strong> CADASTRO </strong></v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <router-view></router-view>
    <v-card color="black" height="40">
      <v-card-actions class="justify-space-between"></v-card-actions>
    </v-card>

    <v-footer padless color="black" app height="50">
      <v-col class="text-center" cols="12">
        <span style="color: white">&copy; MAGIC Nature 2020.</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    length: 3,
    window: 0,
  }),
};
</script>
