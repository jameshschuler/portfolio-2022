<template>
  <div class="tag">
    <span>
      <i :class="`devicon-${icon}`" class="text-3xl"></i>
    </span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped></style>
