<template>
  <div class="tooltip">
    <span class="tooltiptext" :class="{ inverted: inverted }">Email copied to clipboard!</span>
    <CircleIcon
      :class="{ inverted: inverted }"
      icon="fa-regular fa-envelope"
      background-color="#20ab2f"
      :custom-action="handleEmailClick"
    />
  </div>
</template>
<script setup lang="ts">
import CircleIcon from '@/components/CircleIcon.vue';
import { copyEmailToClipboard } from '../utils';

const props = defineProps({
  inverted: {
    type: Boolean,
    default: false,
  },
});

function handleEmailClick() {
  copyEmailToClipboard();
  const tooltipElement = props.inverted
    ? document.querySelector('.tooltiptext.inverted')
    : document.querySelector('.tooltiptext');
  tooltipElement!.classList.add('show');

  setTimeout(() => {
    tooltipElement!.classList.remove('show');
  }, 2000);
}
</script>
<style lang="scss" scoped>
.inverted {
  border: 2px solid white;
}

.tooltip {
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    width: 230px;
    background-color: $green;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 105%;

    &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent $green transparent transparent;
    }

    &.inverted {
      background-color: #fff;
      color: $green;

      &::after {
        border-color: transparent #fff transparent transparent;
      }
    }

    &.show {
      visibility: visible;
    }
  }
}
</style>
