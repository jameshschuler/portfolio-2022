<template>
  <div class="w-1/2 pt-48" id="about">
    <div class="w-xl mx-auto">
      <h1 class="text-5xl font-semibold leading-normal">Hello! My name is James Schuler.</h1>
      <p class="my-4 leading-loose">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div class="flex justify-center flex-col items-center mt-10">
        <button class="text-white p-2 rounded-xl text-xl font-semibold" id="download-resume-btn">
          Resume
        </button>

        <div class="mt-10 flex justify-center items-center">
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
          <CircleIcon
            icon="fa-regular fa-envelope"
            background-color="#2ede40"
            :custom-action="copyEmailToClipboard"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { copyEmailToClipboard } from '../utils';
import CircleIcon from './CircleIcon.vue';
</script>
<style lang="scss" scoped>
#download-resume-btn {
  background-color: $green;
  width: 200px;
}
</style>
