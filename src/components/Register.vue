<template>
  <v-app id="inspire">
    <v-row cols="12" md="12" class="back" no-gutters justify="center">
      <v-img src="..\assets\img\floresta.webp">
        <v-container style="padding: 40px">
          <v-col cols="12" md="7" class="mx-auto black--text">
            <v-img height="530" style="padding: 58px">
              <v-form
                id="contato"
                method="post"
                action="email.php"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <br />

                <v-col cols="12" md="8" class="mx-auto black--text">
                  <v-card>
                    <v-text-field
                      outlined
                      hide-details
                      style="padding: 3px"
                      color="black"
                      background-color="white"
                      v-model="name"
                      :rules="nameRules"
                      label="Nome"
                      required
                    ></v-text-field>
                  </v-card>
                </v-col>
                <br />

                <v-col cols="12" md="8" class="mx-auto black--text">
                  <v-card>
                    <v-text-field
                      outlined
                      hide-details
                      style="padding: 3px"
                      color="black"
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-card>
                </v-col>
                <br />

                <v-col cols="12" md="8" class="mx-auto black--text">
                  <v-card>
                    <v-text-field
                      outlined
                      hide-details
                      style="padding: 3px"
                      color="black"
                      v-model="tel"
                      type="text"
                      maxlength="12s"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                      counter="12"
                      :rules="[
                        (x) => !!x || 'Digite o telefone!',
                        (x) =>
                          (x && x.length >= 12) || 'Digite Telefone Valido!',
                      ]"
                      label="Telefone"
                      required
                    ></v-text-field>
                  </v-card>
                </v-col>
                <br />
              </v-form>
              <br />

              <v-row cols="2" md="3" justify="center">
                <v-btn
                  style="color: white"
                  height="40"
                  width="150"
                  :disabled="!valid"
                  color="success"
                  @click="validate"
                  ><strong>Enviar</strong></v-btn
                >

                <v-snackbar
                  v-model="snackbar"
                  :timeout="timeout"
                  top
                  color="success"
                >
                  {{ text }}
                </v-snackbar>
              </v-row>
            </v-img>
          </v-col>
        </v-container>
      </v-img>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: `compre`,
  props: {
    source: String,
  },

  data: () => ({
    length: 3,
    window: 0,
    tel: null,
    msg: "",
    snackbar: false,
    text: "Cadastrado com Sucesso! Parabéns pela iniciativa!",
    timeout: 2000,
    valid: true,
    name: "",

    email: "",

    // regras da mascara //
    nameRules: [(v) => !!v || "Digite o nome!"],
    emailRules: [
      (v) => !!v || "Digite o email!",
      (v) => /.+@.+\..+/.test(v) || "Um E-mail valido",
    ],
    select: null,
    checkbox: false,
  }),
  methods: {
    voltar() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.cadastro = true;
        setTimeout(() => {
          this.voltar();
        }, 2000);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped></style>
