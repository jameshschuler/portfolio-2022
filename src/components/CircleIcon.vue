<template>
  <a v-if="link !== ''" :href="link" target="_blank">
    <span class="mx-3 circle-icon flex justify-center items-center rounded-full cursor-pointer">
      <i class="fa-fw text-white" :class="[icon, iconSize]"></i>
    </span>
  </a>
  <span
    class="mx-3 circle-icon flex justify-center items-center rounded-full cursor-pointer"
    v-else
    @click="() => customAction()"
  >
    <i class="fa-fw text-white" :class="[icon, iconSize]"></i>
  </span>
</template>
<script setup lang="ts">
const props = defineProps({
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
    required: false,
    default: 'fa-lg',
  },
  link: {
    type: String,
    required: false,
    default: '',
  },
  customAction: {
    type: Function,
    required: false,
    default: () => {},
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
