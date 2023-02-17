<template>
  <div class="w-1/2 pt-48 mx-auto <lg:pt-4 <lg:w-full" id="about">
    <div class="w-xl mx-auto <lg:mx-6 <lg:w-auto">
      <h1 class="text-5xl font-semibold leading-normal">Hello! My name is James Schuler.</h1>
      <p class="my-4 leading-loose">
        I'm a full stack software engineer with 7 years of experience currently based in San Diego,
        CA. I mostly work with .NET (C#) and Vue.js (TypeScript) building Web apps and Web APIs, but
        always looking for new tech to learn! In my free time I enjoy hanging out with my wife and
        cat, weightlifting, hiking, trying new foods and beer, and attending a variety of concerts.
      </p>

      <div class="flex justify-center flex-col items-center mt-10">
        <button class="text-white p-2 rounded-xl text-xl font-semibold" id="view-resume-btn">
          <a :href="resumePath" target="_blank">Resume</a>
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
          <CircleIconTooltip />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import resumePath from '../assets/jameshschuler_resume_2023.pdf';
import CircleIcon from './CircleIcon.vue';
import CircleIconTooltip from './CircleIconTooltip.vue';
</script>
<style lang="scss" scoped>
#view-resume-btn {
  background-color: $green;
  width: 200px;
}
</style>
