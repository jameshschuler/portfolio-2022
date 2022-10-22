<template>
  <footer class="p-12 flex justify-between items-center">
    <h1 class="text-3xl font-medium tracking-widest">James Schuler</h1>
    <div class="flex justify-center items-center">
      <CircleIcon
        icon="fa-brands fa-github"
        icon-size="fa-xl"
        background-color="#000"
      />
      <CircleIcon icon="fa-brands fa-linkedin-in" background-color="#0077b5" />
      <CircleIcon
        id="email-icon"
        icon="fa-regular fa-envelope"
        background-color="#2ede40"
      />
    </div>
    <h1 class="text-3xl font-medium ml-4 tracking-widest">2022</h1>
  </footer>
</template>
<script setup lang="ts">
import CircleIcon from "@/components/CircleIcon.vue";
</script>
<style lang="scss" scoped>
footer {
  background-color: #2ede40;

  h1 {
    color: #fff;
  }

  #email-icon {
    border: 2px solid white;
  }
}
</style>
