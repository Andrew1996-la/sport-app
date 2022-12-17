<template>
  <li @click="setCurrentExercise">{{ exercise.nameOfExercise }}</li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ExerciseItem",
  emits: ["someEvent"],
  props: ["exercise"],
  methods: {
    setCurrentExercise() {
      this.setCurrentNameOfExercise(this.exercise.nameOfExercise);
    },
    ...mapActions(["setCurrentNameOfExercise"]),
  },
};
</script>

<style scoped></style>
