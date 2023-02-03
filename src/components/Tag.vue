<template>
  <div class="tag mb-5 mx-1">
    <span class="px-4 py-2 rounded-md border-2 border-gray-500 text-sm">{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
