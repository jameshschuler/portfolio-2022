<template>
  <span
    class="mx-3 circle-icon flex justify-center items-center rounded-full cursor-pointer"
  >
    <i class="fa-fw text-white" :class="[icon, iconSize]"></i>
  </span>
</template>
<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  iconSize: {
    type: String,
    required: true,
    default: "fa-lg",
  },
});
</script>
<style lang="scss" scoped>
.circle-icon {
  background-color: v-bind(backgroundColor);
  height: 45px;
  width: 45px;
}
</style>
