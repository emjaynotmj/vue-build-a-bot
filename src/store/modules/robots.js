export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    addRobotParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getRobotParts({ commit }) {
      fetch('/api/parts').then(res => res.json())
        .then(res => commit('addRobotParts', res))
        .catch(err => console.log('err while fetching parts', err));
    },
    addRobotToCart({ commit }, robot) {
      return fetch('/api/cart', {
        method: 'POST',
      }).then(res => res.json())
        .then(() => commit('addRobotToCart', robot))
        .catch(err => console.log('err adding robot', err));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
};
