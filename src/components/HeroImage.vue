<template>
  <div class="w-1/2 wx-auto <lg:w-full <lg:mt-6">
    <figure class="w-2xl <lg:w-auto">
      <img class="<lg:hidden" src="../assets/background.svg" alt="" />
      <img class="me absolute <lg:relative !<lg:inset-0 <lg:mx-auto" src="../assets/me.png" />
    </figure>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
figure {
  position: relative;
  .me {
    height: 650px;
    left: calc(50% - 150px);
    top: 100px;
  }
}
</style>
