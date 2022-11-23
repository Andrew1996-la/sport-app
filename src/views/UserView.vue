<template>
  <div class="user">
    <h1>enter exercise</h1>
    <h3>List of exercises</h3>
    <ul>
      <li :key="exercise.id" v-for="exercise in getExercises">
        {{ exercise.nameOfExercise }}
      </li>
    </ul>
    <form action="#">
      <input
        class="user__input"
        type="text"
        placeholder="enter your exercise"
        v-model="nameOfExercise"
      />
      <button @click="createExercise(nameOfExercise)">
        Добавить упражнение
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["createExercise"]),
  },
  computed: {
    ...mapGetters(["getExercises"]),
  },
};
</script>

<style scoped lang="scss"></style>
