<template>
  <section ref="modalWindow" class="modal">
    <div class="content">
      <span class="modal__close" @click="closeModal">&#10010;</span>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "VModal",
  methods: {
    ...mapActions(["closeModal"]),
  },
  created() {
    document.addEventListener("keyup", (evt) => {
      if (evt.key === "Escape") {
        this.closeModal();
      }
    });
    document.addEventListener("click", (evt) => {
      if (evt.target === this.$refs.modalWindow) {
        this.closeModal();
      }
    });
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal__close {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  cursor: pointer;
}

.content {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 400px;
  height: 300px;
  background-color: white;
}
</style>
