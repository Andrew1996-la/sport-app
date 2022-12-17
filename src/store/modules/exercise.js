import { getRandomId } from "@/utils";

export default {
  state: () => ({
    nameExercises: [],
    nameOfExercise: "",
    currentNameOfExercise: "",
  }),
  getters: {
    getExercises(state) {
      return state.nameExercises;
    },
    getCurrentNameOfExercise(state) {
      return state.currentNameOfExercise;
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
    SET_CURRENT_NAME_OF_EXERCISE(state, currentNameOfExercise) {
      state.currentNameOfExercise = currentNameOfExercise;
    },
  },
  actions: {
    createExercise({ commit }, nameOfExercise) {
      commit("CREATE_EXERCISE", nameOfExercise);
    },
    setCurrentNameOfExercise({ commit }, currentNameOfExercise) {
      commit("SET_CURRENT_NAME_OF_EXERCISE", currentNameOfExercise);
    },
  },
};
