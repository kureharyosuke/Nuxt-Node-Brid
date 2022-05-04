<template>
  <v-container>
    <div>
      <post-card />
      <post-card />
      <post-card />
      <post-card />
      <post-card />
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  components: {
    PostCard: () => import("../components/PostCard.vue"),
  },
  data() {
    return {
      name: "Nuxt.js index",
    };
  },
};
</script>

<style></style>
