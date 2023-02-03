<template>
  <div class="project shadow-lg flex flex-col">
    <figure>
      <img :src="getImageUrl(project.image)" :alt="project.name" class="w-full" />
    </figure>
    <div class="card-body bg-white p-6 flex-1 flex flex-col justify-around rounded-md">
      <h1 class="text-4xl font-medium">{{ project.name }}</h1>
      <div class="tags mt-6 flex flex-wrap">
        <Tag v-for="tag in sortedTags" class="mr-2" :text="tag" />
      </div>
      <div class="links mt-4 flex justify-end">
        <a class="p-2" target="_blank" :href="project.githubUrl">
          <span><i class="fa-brands fa-fw fa-xl fa-github-alt"></i></span
        ></a>
        <a class="p-2" target="_blank" v-if="project.websiteUrl" :href="project.websiteUrl">
          <span><i class="fa-solid fa-fw fa-lg fa-up-right-from-square text-sky-700"></i></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Tag from '@/components/Tag.vue';
import { computed, PropType } from 'vue';
import { ProjectModel } from '../models';

const { project } = defineProps({
  project: {
    type: Object as PropType<ProjectModel>,
    required: true,
  },
});

const sortedTags = computed(() => {
  return project.tags.sort((a: string, b: string) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
});

function getImageUrl(imageName: string): string {
  if (imageName === '') {
    return 'https://picsum.photos/200';
  }

  return new URL(`../assets/${imageName}`, import.meta.url).href;
}
</script>
<style lang="scss" scoped>
figure {
  img {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
}

.links {
  a {
    .fa-github-alt {
      color: #171515;
    }

    &:hover {
      background-color: $dark_green;

      svg {
        color: #fff;
      }
    }
  }
}
</style>
