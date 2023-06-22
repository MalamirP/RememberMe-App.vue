<template>
  <ul>
    <learning-resource-vue
      v-for="res in resources"
      v-bind:key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource-vue>
  </ul>
</template>

<script>
import LearningResourceVue from './LearningResource.vue';
export default {
  inject: ['resources'],
  components: {
    LearningResourceVue,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
