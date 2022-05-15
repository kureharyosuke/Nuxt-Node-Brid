export const state = () => ({
  mainPosts: [],
});

export const mutations = {
  addMainPosts(state, payload) {
    state.mainPosts.unshift(payload);
  },
  removeMainPosts(state, payload) {
    // state.mainPosts.filter((v) => v.id !== payload);
    const index = state.mainPosts.findIndex((v) => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
};

export const actions = {
  add({ commit }, payload) {
    // 다른곳의 함수를 사용할수 있다. commit("addMainPosts", payload, { root: true });
    // 서버에 게시글 등록 요청 보내는부분
    commit("addMainPosts", payload);
  },
  remove({ commit }, payload) {
    // 서버에 게시글 삭제 요청 보내는 부분
    commit("removeMainPosts", payload);
  },
};
