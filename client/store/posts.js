export const state = () => ({
  mainPosts: [],
});

export const mutations = {
  addMainPosts(state, payload) {
    state.mainPosts.unshift(payload);
  },
};

export const actions = {
  add({ commit }, payload) {
    commit("addMainPosts", payload, { root: true });
  },
};
