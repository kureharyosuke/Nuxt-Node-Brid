export const state = () => ({
  me: null,
});

// mutations 비동기 작업이 있으면 안된다.
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};
// rootState, rootGetters, rootMutations, rootActions
export const actions = {
  // context 의 구조분해를 사용하여 액션을 작성할 수 있다.
  // signUp({ commit, dispatch, state, getters, rootState, rootGetters }, payload) {},
  signUp({ commit }, payload) {
    console.log("🚀 ~ file: users.js ~ line 16 ~ signUp ~ payload", payload);
    // 서버에 회원가입 요청을 보내는 부분
    // context.commit("setMe", payload);
    commit("setMe", payload);
  },
  logIn({ commit }, payload) {
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
};
