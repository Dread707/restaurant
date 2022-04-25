<template>
  <v-card max-width="800" class="mx-auto">
    <div class="d-flex justify-space-between">
      <h3 class="ml-3 py-3">Корзина:</h3>
      <div class="d-flex justify-end py-3 pr-3">
        <span
          class="my-auto mr-3 error--text subtitle-1"
          v-if="Object.keys(delItem).length > 0"
          >Удалено</span
        >
        <v-btn
          v-if="Object.keys(delItem).length > 0"
          @click.prevent="revivalItem()"
          color="error"
          elevation="2"
          text
        >
          <span>Восстановить заказ</span>
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="item in cart" :key="item.id">
        <v-list-item-avatar>
          <img :src="item.img" :alt="item.text" />
        </v-list-item-avatar>
        <v-list-item-content>
          <strong v-html="item.text"></strong>

          <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
          <v-select
            class="number-input mt-3"
            :items="selectCount"
            label="Кол-во"
            v-model="item.qt"
            @change="changeQt"
          ></v-select>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text
            class="text-h6"
            v-text="item.cost + ' ₽'"
          ></v-list-item-action-text>

          <v-list-item-action-text>
            <v-btn class="mb-3" @click.prevent="removeItem(item.id)" icon>
              <v-icon color="error">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <div class="d-flex justify-center py-3 px-3">
      <v-btn block width="200px" color="deep-purple" elevation="2" text>
        <span>Всего: {{ Total }} ₽</span>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "busketCard",
  computed: {
    ...mapGetters(["cart", "TotalPositions", "delItem", "Total"]),
  },
  methods: {
    ...mapActions(["removeItem", "changeQt", "revivalItem"]),
  },
  data: () => ({
    selectCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
};
</script>

<style scoped>
.number-input {
  max-width: 75px;
}

.v-input--is-focused {
  height: 40px;
}

.v-avatar img {
  width: 60px;
  height: 40px;
}
</style>
