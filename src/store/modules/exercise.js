import { getRandomId } from "@/utils";

export default {
  state: () => ({
    nameExercises: [],
    nameOfExercise: "",
  }),
  getters: {
    getExercises(state) {
      return state.nameExercises;
    },
  },
  mutations: {
    CREATE_EXERCISE(state, nameOfExercise) {
      state.nameExercises.push({
        id: getRandomId(),
        nameOfExercise,
      });
      nameOfExercise = state.nameOfExercise;
    },
  },
  actions: {
    createExercise({ commit }, nameOfExercise) {
      commit("CREATE_EXERCISE", nameOfExercise);
    },
  },
};
