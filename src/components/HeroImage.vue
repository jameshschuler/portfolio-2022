<template>
  <div class="w-1/2">
    <figure class="w-2xl">
      <img src="../assets/background.svg" alt="" />
      <img class="me" src="../assets/me.png" />
    </figure>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
figure {
  position: relative;
  .me {
    position: absolute;
    height: 650px;
    left: calc(50% - 150px);
    top: 100px;
  }
}
</style>
