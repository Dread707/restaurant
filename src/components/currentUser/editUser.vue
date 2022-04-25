<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Редактирование пользователя</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <span class="subtitle-1">Основная информация</span>
        <v-row>
          <v-col cols="2">
            <v-col cols="12" sm="6" md="4">
              <v-avatar v-if="!showPreview" color="indigo" size="84">
                <input
                  type="file"
                  id="field-file"
                  ref="file"
                  style="display: none"
                  accept="image/*"
                  @change="handleFileUpload()"
                />
                <a @click="handleFileClick">
                  <v-icon dark> mdi-plus </v-icon>
                </a>
              </v-avatar>

              <v-avatar
                size="84"
                v-if="showPreview && currentUser.avatarUrl === ''"
              >
                <img :src="imagePreview" alt="Аватар" />
              </v-avatar>
              <v-avatar size="84" v-if="currentUser.avatarUrl !== ''">
                <img :src="currentUser.avatarUrl" alt="Аватар" />
              </v-avatar>
            </v-col>
          </v-col>
          <v-col cols="10">
            <v-row>
              <v-col sm="6">
                <v-text-field
                  @keypress="filterKeyboard($event, '[А-Яа-яЁё ]+')"
                  label="Имя"
                  v-model="firstName"
                  required
                  :rules="[(v) => !!v || 'Укажите имя']"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col sm="6">
                <v-text-field
                  @keypress="filterKeyboard($event, '[А-Яа-яЁё ]+')"
                  label="Фамилия"
                  v-model="lastName"
                  :rules="[(v) => !!v || 'Укажите фамилию']"
                  required
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="6">
                <v-text-field
                  clearable
                  label="Почта"
                  v-model="currentUser.email"
                  :rules="[rules.required, rules.email]"
                  required
                  placeholder="ivanov@example.ru"
                ></v-text-field>
              </v-col>
              <v-col sm="6">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :value="computedDateFormatted"
                      clearable
                      label="Дата рождения"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      @click:clear="currentUser.birthdayDate = null"
                      :rules="[(v) => !!v || 'Укажите дату рождения']"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="currentUser.birthdayDate"
                    @change="menu = false"
                    locale="ru-ru"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="6">
                <v-text-field
                  clearable
                  v-mask="'+7(9##)###-##-##'"
                  label="Номер телефона"
                  v-model="currentUser.phoneNumber"
                  :rules="[(v) => !!v || 'Укажите номер телефона']"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <span class="subtitle-1">Дополнительная информация</span>
        <div class="mt-4">
          <div class="d-flex">
            <v-col cols="12">
              <v-textarea
                solo
                v-model="currentUser.commmentInfo"
                name="input-7-4"
                label="Напишите о себе"
              ></v-textarea>
            </v-col>
          </div>
        </div>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple lighten-2" text @click="$emit('eventModal')">
        Отменить
      </v-btn>
      <v-btn color="green darken-1" text @click="editUser"> Сохранить </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { filterKeyboard } from "@/function";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "editUser",
  props: {},
  data: () => ({
    showPreview: false,
    imagePreview: "",
    firstName: "",
    lastName: "",
    menu: false,
    rules: {
      required: (value) => !!value || "Укажите e-mail",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Неправильно набран e-mail.";
      },
    },
    sections: [],
  }),
  mounted() {
    this.currentUser.avatarUrl ? (this.showPreview = true) : "";
    this.firstName = this.currentUser.name.split(" ")[0];
    this.lastName = this.currentUser.name.split(" ")[1];
  },
  computed: {
    ...mapGetters(["currentUser"]),
    computedDateFormatted() {
      return this.currentUser.birthdayDate
        ? this.$moment(this.currentUser.birthdayDate).format("DD.MM.YYYY")
        : "";
    },
    computedName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  watch: {
    computedName(val) {
      // eslint-disable-next-line vue/no-mutating-props
      this.currentUser.name = val;
    },
  },
  methods: {
    ...mapActions(["editCurrentUser"]),
    filterKeyboard,
    handleFileClick() {
      this.$refs.file.click();
    },
    handleFileUpload() {
      this.currentUser.avatarUrl = this.$refs.file.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );
      if (this.currentUser.avatarUrl) {
        if (/\.(jpe?g|png|gif)$/i.test(this.currentUser.avatarUrl.name)) {
          reader.readAsDataURL(this.currentUser.avatarUrl);
        }
      }
    },
    editUser() {
      this.$emit("eventModal");
      this.editCurrentUser();
      this.$toast.success("Данные пользователя изменены");
    },
  },
};
</script>

<style scoped></style>
