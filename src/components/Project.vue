<template>
  <div class="project col-auto flex justify-center flex-col items-center">
    <h1 class="text-3xl mb-12 font-medium">{{ project.name }}</h1>
    <div>
      <figure>
        <img :src="getImageUrl(project.image)" :alt="project.name" />
      </figure>
      <div class="links flex flex-col w-full mt-5 text-lg">
        <a
          class="p-4 my-2 text-center"
          target="_blank"
          :href="project.githubUrl"
          >View Code</a
        >
        <a
          class="p-4 my-2 text-center"
          target="_blank"
          v-if="project.websiteUrl"
          :href="project.websiteUrl"
          >Website</a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { ProjectModel } from "../models";

defineProps({
  project: {
    type: Object as PropType<ProjectModel>,
    required: true,
  },
});

function getImageUrl(imageName: string): string {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
}
</script>
<style lang="scss" scoped>
.links {
  a {
    border: 2px solid $dark_green;

    &:hover {
      background-color: $dark_green;
      color: #fff;
    }
  }
}
</style>
