<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      :loading="loading"
      height="498"
      max-width="374"
      class="my-10 mx-auto"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple lighten-2"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="card.img"></v-img>

      <v-card-title>{{ card.text }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">{{ card.cost }} ₽</div>

        <div>
          {{ slicedText(card.info) }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="$emit('buyEvent')">
          Добавить в корзину
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "itemRestaurantCard",
  props: {
    card: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    slicedText(text) {
      let sliced = text.slice(0, 80);
      if (sliced.length < text.length) {
        return (sliced += "...");
      } else return sliced;
    },
  },
};
</script>

<style scoped>
.v-card__actions {
  bottom: 0;
  position: absolute;
}
</style>
