<template>
  <div class="user">
    <h1>enter exercise</h1>
    <h3>List of exercises</h3>
    <ul>
      <ExerciseItem
        :key="exercise.id"
        v-for="exercise in getExercises"
        :exercise="exercise"
        @click="showModal"
      >
        {{ exercise.nameOfExercise }}
      </ExerciseItem>
    </ul>
    <form action="#" @submit.prevent="resetInput">
      <input
        class="user__input"
        type="text"
        placeholder="enter your exercise"
        v-model="nameOfExercise"
        ref="exerciseInput"
      />
      <button @click="createExercise(nameOfExercise)">
        Добавить упражнение
      </button>
    </form>
    <VModal v-if="isShowModal">{{ getCurrentNameOfExercise }}</VModal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VModal from "@/components/VModal";
import ExerciseItem from "@/components/ExerciseItem";

export default {
  components: { ExerciseItem, VModal },
  data() {
    return {
      nameOfExercise: "",
    };
  },
  methods: {
    ...mapActions(["createExercise", "showModal", "closeModal"]),
    resetInput() {
      this.$refs.exerciseInput.value = "";
    },
  },
  computed: {
    ...mapGetters(["getExercises", "isShowModal", "getCurrentNameOfExercise"]),
  },
};
</script>

<style scoped lang="scss"></style>
