export default {
  addToItems: ({ commit }, item) => commit("ADD_ITEM", item),
  removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
  changeQt: ({ commit }) => commit("CHANGE_QT"),
  revivalItem: ({ commit }) => commit("REVIVA"),
};
