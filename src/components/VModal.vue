<template>
  <section class="modal">
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "VModal",
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
