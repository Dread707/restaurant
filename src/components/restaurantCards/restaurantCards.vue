<template>
  <v-container>
    <v-layout row wrap>
      <v-flex :key="card.id" v-for="card in Products">
        <item-restaurant-card :card="card" @buyEvent="addToItems(card)" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ItemRestaurantCard from "@/components/restaurantCards/itemRestaurantCard";

export default {
  name: "restaurantCards",
  components: { ItemRestaurantCard },
  data: () => ({}),
  computed: {
    ...mapGetters(["Products"]),
  },
  methods: {
    ...mapActions(["addToItems"]),
  },
};
</script>

<style scoped></style>
