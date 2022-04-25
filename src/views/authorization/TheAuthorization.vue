<template>
  <v-content class="login-background">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Форма авторизации</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  name="Логин"
                  v-model="user.loginInput"
                  label="Логин"
                  type="text"
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="user.passwordInput"
                  name="Пароль"
                  label="Пароль"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/registration">Регистрация</v-btn>
              <v-btn color="success" @click="login">Войти</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "TheAuthorization",
  data: () => ({
    testUser: {
      login: "testUser",
      password: "qwerty123",
    },
    user: {
      loginInput: "",
      passwordInput: "",
    },
  }),
  methods: {
    login() {
      if (
        this.user.loginInput === this.testUser.login &&
        this.user.passwordInput === this.testUser.password
      ) {
        let isLogin = "true";
        localStorage.setItem("user", isLogin);
        this.$router.push({ name: "home" });
      } else this.$toast.error("Неверный логин или пароль");
    },
  },
};
</script>

<style scoped></style>
