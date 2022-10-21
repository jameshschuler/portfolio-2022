<template>
  <div class="w-1/2 mt-10">
    <div class="w-xl mx-auto">
      <h1 class="text-5xl font-semibold leading-normal">
        Hello! My name is James Schuler.
      </h1>
      <p class="my-4 leading-loose">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div class="flex justify-center flex-col items-center mt-10">
        <button
          class="text-white p-2 rounded-xl text-xl"
          id="download-resume-btn"
        >
          Resume
        </button>

        <div class="mt-10 flex justify-center items-center">
          <CircleIcon
            icon="fa-brands fa-github"
            icon-size="fa-xl"
            background-color="#000"
          />
          <CircleIcon
            icon="fa-brands fa-linkedin-in"
            background-color="#0077b5"
          />
          <CircleIcon
            icon="fa-regular fa-envelope"
            background-color="#2ede40"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CircleIcon from "./CircleIcon.vue";
</script>
<style lang="scss" scoped>
#download-resume-btn {
  background-color: $green;
  width: 200px;
}
</style>
