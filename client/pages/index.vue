<template>
  <v-container>
    <!-- me의 정보가 null이 아니라면 보여준다. -->
    <post-form v-if="me" />
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" />
    </div>
  </v-container>
</template>

<script>
export default {
  components: {
    PostCard: () => import("~/components/PostCard.vue"),
    PostForm: () => import("~/components/PostForm.vue"),
  },
  layout: "default",
  data() {
    return {
      name: "Nuxt.js index",
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
    mainPosts() {
      return this.$store.state.posts.mainPosts;
    },
  },
};
</script>

<style></style>
