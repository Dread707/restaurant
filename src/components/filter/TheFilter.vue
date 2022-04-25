<template>
  <v-card>
    <div class="d-flex justify-space-between">
      <h3 class="ml-3 py-3">Фильтр:</h3>
    </div>
    <v-divider></v-divider>
    <v-container class="mx-2">
      <p>Фильтрация по цене</p>
      <v-range-slider
        v-model="range"
        :max="max"
        @change="rangeByCost(range)"
        :min="min"
        hide-details
        color="deep-purple lighten-2"
        class="align-center"
      >
        <template v-slot:prepend>
          <span class="range-item mt-0 pt-0">{{ range[0] + " ₽" }}</span>
        </template>
        <template v-slot:append>
          <span class="range-item mt-0 pt-0">{{ range[1] + " ₽" }}</span>
        </template>
      </v-range-slider>
      <p class="mt-3">Сортировка:</p>
      <v-checkbox
        color="deep-purple lighten-2"
        hide-details
        v-model="sortByCostValue"
        @click="sortByCostFunc"
        label="Сортировка по цене"
      ></v-checkbox>
      <v-checkbox
        color="deep-purple lighten-2"
        hide-details
        v-model="sortByNameValue"
        @click="sortByNameFunc"
        label="Сортировка по наименованию"
      ></v-checkbox>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TheFilter",
  data: () => ({
    sortByCostValue: false,
    sortByNameValue: false,
    min: 0,
    max: 1500,
    range: [0, 1500],
  }),
  methods: {
    ...mapActions(["sortByName", "sortByCost", "rangeByCost"]),
    sortByNameFunc() {
      if (this.sortByNameValue) {
        this.sortByCostValue = false;
        this.sortByName();
      }
    },
    sortByCostFunc() {
      if (this.sortByCostValue) {
        this.sortByNameValue = false;
        this.sortByCost();
      }
    },
  },
};
</script>

<style scoped>
.range-item {
  min-width: 55px;
}
</style>
