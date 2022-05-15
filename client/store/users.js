export const state = () => ({
  me: null,
});

// mutations 비동기 작업이 있으면 안된다.
// setTimeOut, axios 의 콜백 함수를 비동기로 사용하면 안된다.
// 비동기 작업을 동기로 처리하는 것이 좋다.
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

// rootState, rootGetters, rootMutations, rootActions
export const actions = {
  signUp({ commit }, payload) {
    console.log("🚀 ~ file: users.js ~ line 16 ~ signUp ~ payload", payload);
    // 서버에 회원가입 요청을 보내는 부분
    commit("setMe", payload);
  },
  logIn({ commit }, payload) {
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
};

// export const actions = {
// signUp({ commit, dispatch, state, getters, rootState, rootGetters }, payload) {},
// context 의 구조분해를 사용하여 액션을 작성할 수 있다.
// signUp(context, payload) {
// context.commit("setMe", payload);
// console.log("🚀 ~ file: users.js ~ line 18 ~ signUp ~ context", context);
// signUp({ commit }, payload) {
// console.log("🚀 ~ file: users.js ~ line 16 ~ signUp ~ payload", payload);
// 서버에 회원가입 요청을 보내는 부분
// commit("setMe", payload);
// },
