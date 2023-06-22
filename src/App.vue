<template>
  <the-header-vue :title="'RememberMe'"></the-header-vue>
  <the-resources-vue></the-resources-vue>
</template>

<script>
import TheHeaderVue from './components/layouts/TheHeader.vue';
import TheResourcesVue from './components/learning-resources/TheResources.vue';
export default {
  components: {
    TheHeaderVue,
    TheResourcesVue,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
