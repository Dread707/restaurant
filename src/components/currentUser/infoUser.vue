<template>
  <v-card class="mx-auto" width="256" tile>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ currentUser.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ currentUser.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group
        v-model="selectedItem"
        :value="true"
        no-action
        color="deep-purple lighten-2"
      >
        <v-dialog v-model="dialog" persistent max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-bind="attrs" v-on="on" link>
              <v-list-item-icon>
                <v-icon>mdi-account-edit</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Редактировать профиль</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <edit-user @eventModal="dialog = !dialog" />
        </v-dialog>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-tune-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-clipboard-text-clock</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>История заказов</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-face-agent</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Поддержка</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-sale</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Акции</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Мои промокоды</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import EditUser from "@/components/currentUser/editUser";
import { mapGetters } from "vuex";
export default {
  name: "infoUser",
  components: { EditUser },
  data: () => ({
    selectedItem: 0,
    dialog: false,
  }),
  computed: {
    ...mapGetters(["currentUser"]),
  },

  methods: {},
};
</script>

<style scoped></style>
