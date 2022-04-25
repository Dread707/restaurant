<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    if (!localStorage.getItem("user")) {
      this.$router.push({ name: "Login" });
    } else this.$router.push({ name: "home" });
  },
};
</script>
