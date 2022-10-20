<template>
  <Navbar />
  <ContentContainer />
  <Footer />
</template>
<script setup lang="ts">
import ContentContainer from "./components/ContentContainer.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  main {
    flex-grow: 1;
  }

  header,
  main,
  footer {
    flex-shrink: 0;
  }
}
</style>
