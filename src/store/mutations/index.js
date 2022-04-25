import {
  calculateAmount,
  calculateTotal,
  copyFunc,
  sortByKey,
} from "@/function";
import Vuetify from "@/plugins/vuetify";

export default {
  RANGE_BY_COST(state, payload) {
    state.range = payload;
    state.itemsFiltered = state.items.filter(
      (item) => state.range[0] <= item.cost && item.cost <= state.range[1]
    );
  },
  SORT_BY_NAME(state) {
    state.itemsFiltered = [...state.items].sort((a, b) =>
      a.text.localeCompare(b.text)
    );
  },
  SORT_BY_COST(state) {
    state.itemsFiltered = sortByKey(state.items, "cost");
  },
  EDIT_THEME(state) {
    Vuetify.framework.theme.dark = state.theme = !state.theme;
  },
  EDIT_CURRENT_USER(state, index) {
    state.currentUser[index] = !state.currentUser[index];
  },
  ADD_ITEM: (state, item) => {
    state.TotalPositions++;
    if (item.id in state.cart) {
      state.cart[item.id].qt++;
    } else {
      let stateItem = { ...item };
      stateItem.qt = 1;
      state.cart[item.id] = stateItem;
    }
    state.Total = calculateAmount(state.cart);
  },
  REMOVE_ITEM: (state, item) => {
    state.delItem = {};
    state.delItem = copyFunc(state.cart, state.delItem, item);
    delete state.cart[item];
    state.Total = calculateAmount(state.cart);
    state.TotalPositions = calculateTotal(state.cart);
  },
  CHANGE_QT: (state) => {
    state.TotalPositions = calculateTotal(state.cart);
    state.Total = calculateAmount(state.cart);
  },
  REVIVA: (state) => {
    state.cart = Object.assign(state.delItem, state.cart);
    state.Total = calculateAmount(state.cart);
    state.TotalPositions = calculateTotal(state.cart);
  },
};
