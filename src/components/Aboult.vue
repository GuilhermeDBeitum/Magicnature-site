<template>
  <v-app id="inspire">
    <v-row class="black" no-gutters justify="center">
      <v-col cols="12" md="10"> </v-col>

      <v-col cols="12" md="10">
        <v-card class="mx-auto" height="450" width="380" color="black">
          <h1 class="my-4 text-center title" style="color: white">
            Magic Nature
          </h1>

          <v-card class="my-4 text-center" color="black" style="color: white"
            >A destruição da Mata Atlântica e da Floresta Amazônica é intensa.
            Isso agrava muito o problema do aquecimento global, além causar a
            morte de milhares de animais silvestres.</v-card
          >
          <v-card class="my-4 text-center" color="black" style="color: white"
            >Salvar o que resta de nossas florestas é a maneira mais inteligente
            e eficaz de ajudar a combater o aquecimento global.</v-card
          >
          <v-card class="my-4 text-center" color="black" style="color: white"
            >Temos que impedir uma catástrofe maior, salvando as árvores
            centenárias, ou seja, impedir que desmatem as últimas áreas de
            nossas florestas, que abrigam toda a biodiversidade.</v-card
          >
          <v-card class="my-4 text-center" color="black" style="color: white">
            A Magic Nature é a comunidade ativa que vem para organizar e ajudar
            a tomar conta da nossa natureza.
          </v-card>

          <v-card color="black">
            <v-col md="12" class="text-center">
              <router-link
                style="color: black; text-decoration: none"
                to="cadastro"
              >
                <v-btn
                  height="30"
                  color="green"
                  style="color: white"
                  class="my-4 text-center"
                >
                  <h1>CADASTRE-SE</h1>
                </v-btn>
              </router-link>
            </v-col>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: `sobre`,
  props: {
    source: String,
  },

  data: () => ({}),
};
</script>
