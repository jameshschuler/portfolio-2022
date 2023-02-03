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
          <a
            href="https://cvws.icloud-content.com/B/AdvCy9osrGHf_ZRK32N0ikJ07aLfAThX1oUoWdAo1XbGt4ulkJcTDjP4/jameshschuler_resume_2023.pdf?o=AjsFLaqU-ugq1i3zyHkk9AE57ckl6cKYk0XHtT9N91Tr&v=1&x=3&a=CAog4ph01GZ_cu4-VVYFmFS_V7KxscodOwLdCAaNe21wg18SbxCg6O2h4TAYoMXJo-EwIgEAUgR07aLfWgQTDjP4aidctj3e3B8wPvCsK7fYEYmaIm_z80jn1oQem8gj5H-dBopsXbhsOkpyJwJgW9br7U1-AewFOpEX0wDw_YGlOxu1Gg2JERWoYuNw3wbeogApeQ&e=1675380286&fl=&r=a241d8aa-1807-4175-b2fe-bbe1502abc45-1&k=_lnaZag_DIxK0V9oe2Yh4w&ckc=com.apple.clouddocs&ckz=com.apple.Pages&p=62&s=JCtRqQ7M3znsSgkOAYwhwKmtT1c&cd=i"
            target="_blank"
            >Resume</a
          >
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
import CircleIcon from './CircleIcon.vue';
import CircleIconTooltip from './CircleIconTooltip.vue';
</script>
<style lang="scss" scoped>
#view-resume-btn {
  background-color: $green;
  width: 200px;
}
</style>
