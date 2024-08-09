import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},
  actions: {
    async register({ commit }, user) {
      // const axiosInstance = axios.create({
      //   baseURL: 'http://localhost:8000/api',
      // });

      const res = await fetch('http://localhost:8000/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_1 = await res.json();
      commit("setUser", res_1);
      return res_1;
    },

    async login({ commit }, user) {
      // const axiosInstance = axios.create({
      //   baseURL: 'http://localhost:8000/api',
      // });

      const res = await fetch('http://localhost/wdu/public/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
      sessionStorage.clear();
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