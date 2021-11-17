<template>
  <v-dialog v-model="dialog" width="550px">
    <template v-slot:activator="{ on }">
      <v-btn color="green" v-on="on"
        ><strong>SALVE O NOSSO PLANETA</strong></v-btn
      >
    </template>
    <v-card color="black">
      <v-img width="800" src="..\assets\img\extintos.webp"></v-img>

      <v-card color="green" class="text-center"
        ><strong>voce pode salvar esses animais!</strong></v-card
      >
      <router-link style="text-decoration: none" to="cadastro">
        <v-col cols="12" md="12" class="text-center">
          <v-btn color="green" text @click="dialog = false"
            >Quero Salvar
          </v-btn>
        </v-col>
      </router-link>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "modal",

  props: {
    source: String,
  },

  data: () => ({
    dialog: false,
  }),
};
</script>
