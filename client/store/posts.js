export const state = () => ({
  name: "posts",
});

export const mutations = {
  SETPOSTS(state) {
    state.name = "goodbye posts";
  },
};
