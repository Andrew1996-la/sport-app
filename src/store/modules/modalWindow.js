export default {
  state: () => ({
    isShowModal: false,
  }),
  getters: {
    isShowModal(state) {
      return state.isShowModal;
    },
  },
  mutations: {
    SHOW_MODAL(state) {
      state.isShowModal = true;
    },
    CLOSE_MODAL(state) {
      state.isShowModal = false;
    },
  },
  actions: {
    showModal({ commit }) {
      commit("SHOW_MODAL");
    },
    closeModal({ commit }) {
      commit("CLOSE_MODAL");
    },
  },
};
