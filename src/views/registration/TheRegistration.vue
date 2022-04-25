<template>
  <v-content class="login-background">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="success">
              <v-toolbar-title>Форма регистрации</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  name="Логин"
                  label="Логин"
                  type="text"
                ></v-text-field>
                <v-text-field
                  id="password"
                  name="Пароль"
                  label="Пароль"
                  type="password"
                ></v-text-field>
                <v-text-field
                  id="password"
                  name="Пароль"
                  label="Повторить пароль"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" to="/login">Зарегистрироваться</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "TheRegistration",
};
</script>

<style scoped></style>
