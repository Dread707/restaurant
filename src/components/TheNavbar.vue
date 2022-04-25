<template>
  <v-toolbar dense>
    <v-toolbar-title>Ресторан</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu
      v-model="menuFilter"
      :close-on-content-click="false"
      :nudge-width="400"
      :offset-x="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>

      <the-filter />
    </v-menu>

    <v-btn icon @click="editTheme()">
      <v-icon>mdi-brightness-6</v-icon>
    </v-btn>

    <v-menu
      v-if="TotalPositions > 0"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      :offset-x="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          color="red"
          :content="TotalPositions"
          offset-x="20"
          offset-y="25"
          bottom
          bordered
        >
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-basket</v-icon>
          </v-btn>
        </v-badge>
      </template>

      <busket-card />
    </v-menu>

    <v-menu
      v-model="userMenu"
      :close-on-content-click="false"
      :nudge-width="200"
      :offset-x="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-avatar size="32px">
            <img
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            />
          </v-avatar>
        </v-btn>
      </template>

      <info-user />
    </v-menu>

    <v-btn @click="logout" icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BusketCard from "@/components/busket/busketCard";
import InfoUser from "@/components/currentUser/infoUser";
import TheFilter from "@/components/filter/TheFilter";

export default {
  name: "TheNavbar",
  components: { TheFilter, InfoUser, BusketCard },
  data: () => ({
    menu: false,
    userMenu: false,
    menuFilter: false,
  }),
  methods: {
    ...mapActions(["editTheme"]),
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
  },
  computed: {
    ...mapGetters(["TotalPositions"]),
  },
};
</script>

<style scoped></style>
