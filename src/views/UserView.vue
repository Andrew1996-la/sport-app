<template>
  <div class="user">
    <h1>enter exercise</h1>
    <h3>List of exercises</h3>
    <ul>
      <li
        :key="exercise.id"
        v-for="exercise in getExercises"
        @click="showModal"
      >
        {{ exercise.nameOfExercise }}
      </li>
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
    <VModal
      v-if="isShowModal"
      ref="modalWindow"
      @keydown.esc="closeModal"
      tabindex="0"
    >
      <span class="modal__close" @click="closeModal">&#10010;</span>
    </VModal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VModal from "@/components/VModal";

export default {
  components: { VModal },
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
    ...mapGetters(["getExercises", "isShowModal"]),
  },
  created() {
    document.addEventListener("keyup", (evt) => {
      if (evt.key === "Escape") {
        this.closeModal();
      }
    });
  },
};
</script>

<style scoped lang="scss">
.modal__close {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  cursor: pointer;
}
</style>
