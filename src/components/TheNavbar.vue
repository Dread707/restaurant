<template>
  <v-toolbar dense>
    <v-toolbar-title>Ресторан</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
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

    <v-btn @click="logout" icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
import BusketCard from "@/components/busket/busketCard";

export default {
  name: "TheNavbar",
  components: { BusketCard },
  data: () => ({
    menu: false,
  }),
  methods: {
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
