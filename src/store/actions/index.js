export default {
  rangeByCost: ({ commit }, item) => commit("RANGE_BY_COST", item),
  sortByCost: ({ commit }, item) => commit("SORT_BY_COST", item),
  sortByName: ({ commit }, item) => commit("SORT_BY_NAME", item),
  editTheme: ({ commit }, item) => commit("EDIT_THEME", item),
  editCurrentUser: ({ commit }, item) => commit("EDIT_CURRENT_USER", item),
  addToItems: ({ commit }, item) => commit("ADD_ITEM", item),
  removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
  changeQt: ({ commit }) => commit("CHANGE_QT"),
  revivalItem: ({ commit }) => commit("REVIVA"),
};
