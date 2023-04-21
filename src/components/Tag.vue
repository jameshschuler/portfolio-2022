<template>
  <div class="tag mb-5 mx-1">
    <a :href="link" class="px-4 py-2 rounded-md border-2 border-gray-500 text-sm">{{ text }}</a>
  </div>
</template>
<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.tag {
  &:hover {
    cursor: pointer;

    a {
      background-color: #6b7280;
      color: #fff;
    }
  }
}
</style>
