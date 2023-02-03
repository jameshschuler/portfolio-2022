<template>
  <footer class="p-12 <lg:p-6 flex justify-between items-center <lg:flex-col">
    <h1 class="text-3xl font-medium tracking-widest <lg:hidden">James Schuler</h1>
    <div class="flex justify-center items-center <lg:my-5">
      <CircleIcon
        icon="fa-brands fa-github"
        icon-size="fa-xl"
        background-color="#000"
        link="https://github.com/jameshschuler"
      />
      <CircleIcon
        icon="fa-brands fa-linkedin-in"
        background-color="#0077b5"
        link="https://www.linkedin.com/in/jameshschuler/"
      />
      <CircleIconTooltip id="email-icon" :inverted="true" />
    </div>
    <h1 class="text-3xl font-medium ml-4 <lg:ml-0 tracking-widest">
      {{ new Date().getFullYear() }}
    </h1>
  </footer>
</template>
<script setup lang="ts">
import CircleIcon from '@/components/CircleIcon.vue';
import CircleIconTooltip from './CircleIconTooltip.vue';
</script>
<style lang="scss" scoped>
footer {
  background-color: $green;

  h1 {
    color: #fff;
  }
}
</style>
