import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      data: { },
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},
  actions: {
    async register({commit}, user){
      const res = await fetch(`http://localhost:5173/api/register`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      });
      const res_1 = await res.json();
      commit("setUser", res_1);
      return res_1;
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);

    }
  },
  modules: {},
});

export default store;