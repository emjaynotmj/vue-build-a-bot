export default {
  // namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
  },
  actions: {
    signIn({ commit }) {
      fetch('/api/sign-in', {
        method: 'POST',
      }).then(res => res.json())
        .then(result => commit('updateCurrentUser', result))
        .catch(err => console.error('err signing in', err));
    },
  },
};
