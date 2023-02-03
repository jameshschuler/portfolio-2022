<template>
  <header class="py-8 px-14 flex justify-between items-center">
    <h1 class="text-4xl font-medium tracking-widest">James Schuler</h1>
    <nav class="<md:hidden">
      <ul class="flex justify-end text-white text-3xl items-center w-lg tracking-wide">
        <li class="mr-12 cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li class="cursor-pointer">
          <a href="#projects-list">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
header {
  background-color: $green;

  h1 {
    color: #fff;
  }
}
</style>
