import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
import Vuetify from "@/plugins/vuetify";

Vue.use(Vuex);

if (localStorage.getItem("theme")) {
  let themeLocal = JSON.parse(localStorage.getItem("theme"));
  Vuetify.framework.theme.dark = themeLocal.theme;
}

export default new Vuex.Store({
  state: {
    itemsFiltered: [],
    range: [100, 1000],
    theme: false,
    items: [
      {
        id: 1,
        text: "Салат с щупальцами командорского кальмара",
        info: "Микс салат, обжаренные щупальца кальмара, авокадо, свежий огурец, стебель сельдерея, свежие помидоры под соусом с кунжутным маслом и сладким соусом чили, 220 г.",
        cost: 630,
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/4fa/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/salat_kalmar.jpg?2021072301",
      },
      {
        id: 2,
        text: "Сельдь «Под стопочку»",
        cost: 470,
        info: "Филе сельди с обжаренным мини картофелем Подается с соленым огурцом, зеленью, зеленым и красным луком и чесночными гренками из черного хлеба, 100/80/15/15/30 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/d83/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/seld_stopochka.jpg?2021072301",
      },
      {
        id: 3,
        text: "Салат «Цезарь» с курицей",
        cost: 590,
        info: "125/65 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/c33/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/cezar_kuriza.jpg?2021072301",
      },
      {
        id: 4,
        text: "Тарелка свежих овощей с зеленью",
        cost: 550,
        info: "Помидоры, свежий огурец, редис, болгарский перец, лук зеленый, укроп, кинза, базилик, 250 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/5e5/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/tarelka_ovoshi.jpg?2021072301",
      },
      {
        id: 5,
        text: "Салат «Цезарь» с креветками",
        cost: 930,
        info: "125/65 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/29f/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/cezar_krevetki.jpg?2021072301",
      },
      {
        id: 6,
        text: "Салат с куриной печенью",
        cost: 620,
        info: "Микс салат с обжаренными кусочками куриной печени, с помидорами черри и дольками персика, заправляется соево-медовым соусом, 200 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/beb/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/salat_kurinaya_pechen.jpg?2021072301",
      },
      {
        id: 7,
        text: "Баклажаны в кисло-сладком соусе",
        cost: 450,
        info: "Теплая закуска из кусочков баклажан в кисло-сладком соусе, 150 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/44b/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/baklazhany.jpg?2021072301",
      },
      {
        id: 8,
        text: "Ассорти европейских сыров",
        cost: 1500,
        info: "Сыр Бри, сыр Камамбер, сыр Дор Блю, сыр Пармезан. Подается с виноградом, клубникой, медом и грецким орехом, 200 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/d00/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/assorty_syrov_s.jpg?2021072301",
      },
      {
        id: 9,
        text: "Паста Баветте с мидиями",
        cost: 620,
        info: "Спагетти в сливочном соусе и мидиями, 330 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/969/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/pasta_bevetti_midiy.jpg?2021072301",
      },
      {
        id: 10,
        text: "Бургер говяжий",
        info: "Котлета мясная, булочка домашняя, филе запеченого перца, лук «фри», сыр чеддар, горчичный соус, майонез, лист салата, 280 г.",
        cost: 650,
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/3b1/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/burger_govyazhy.jpg?2021072301",
      },
      {
        id: 11,
        text: "Мороженое",
        cost: 180,
        info: "Ванильное Клубничное Шоколадное Фисташковое, 1 шарик / 50 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/c8e/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/morozhenoe.jpg?2021072301",
      },
      {
        id: 12,
        text: "Сорбеты",
        cost: 180,
        info: "Манго Малиновый Черная смородина, 1 шарик / 50 г.",
        img: "https://www.vremena-goda.ru/upload/resize_cache/iblock/a10/600_400_2d7a58ff99b324185ccb5ad5dfbdb5e85/sorbet.jpg?2021072301",
      },
    ],
    currentUser: {
      birthdayDate: "1986-03-17T22:29:11.063Z",
      phoneNumber: "+7(982)658-91-16",
      email: "Ivanov658@yahoo.com",
      avatarUrl: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      name: "Иван Иванов",
      commmentInfo:
        "Для человека, если на то пошло, память — это все. Память- это индивидуальность. Память-это ты.\n" +
        "\n" +
        "Стивен Кинг",
    },
    cart: {},
    delItem: {},
    TotalPositions: 0,
    Total: 0,
  },
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      key: "cart",
      paths: ["cart", "TotalPositions", "Total"],
    }),
    createPersistedState({
      key: "currentUser",
      paths: ["currentUser"],
    }),
    createPersistedState({
      key: "theme",
      paths: ["theme"],
    }),
  ],
});
