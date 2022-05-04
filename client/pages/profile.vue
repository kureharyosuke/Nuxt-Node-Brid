<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      name: "Nuxt.js profile",
    };
  },
  head: {
    title: "profile page",
  },
};
</script>

<style></style>
