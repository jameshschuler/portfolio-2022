<template>
  <div class="mt-48 mb-14 <lg:mx-6" id="projects-list">
    <h1 class="text-6xl text-center">Projects</h1>
    <div class="projects mt-24 grid grid-cols-3 gap-12 <lg:grid-cols-1">
      <Project v-for="p in projects" :project="p" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import data from '../data/projects.json';
import { ProjectModel } from '../models';
import Project from './Project.vue';

const projects = ref<ProjectModel[]>(data.projects);
</script>
<style lang="scss" scoped></style>
