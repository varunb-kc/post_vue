import Vuex from "vuex";
import Vue from "vue";

import storeX from "@/store.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Hello Vuex",
    posts: [],
    auth: false,
    weekTasks: [
      { day: "Sunday", tasks: [] },
      { day: "Monday", tasks: [] },
      { day: "Tuesday", tasks: [] },
      { day: "Wednesday", tasks: [] },
      { day: "Thursday", tasks: [] },
      { day: "Friday", tasks: [] },
      { day: "Saturday", tasks: [] },
    ],
  },
  actions: {
    fetchPosts(ctx) {
      return new Promise((resolve) =>
        resolve(ctx.commit("setPosts", storeX))
      ).then(() => ctx.dispatch("initWeekTasks"));
    },
    initWeekTasks(ctx) {
      ctx.state.posts.forEach((post) => {
        const resultIndex = new Date(post.posted_on).getDay();
        ctx.commit("pushPostDay", { resultIndex, post });
      });
    },
    addPost(ctx, post) {
      ctx.commit("addPost", post);
      const resultIndex = new Date(post.posted_on).getDay();
      ctx.commit("pushPostDay", { resultIndex, post });
    },
    delPost(ctx, post) {
      ctx.commit("deletePost", post.id);
      const resultIndex = new Date(post.posted_on).getDay();
      ctx.commit("popPostDay", { resultIndex, id: post.id });
    },
    setAuth( ctx,value ) {
      ctx.commit('setAuth',value)
    }
  },
  getters:{
    thePost:(state) => id => state.posts.find((p) => String(p.id) === String(id))
  },
  mutations: {
    pushPostDay(state, payload) {
      state.weekTasks[payload.resultIndex].tasks.push(payload.post);
    },
    popPostDay(state, payload) {
      state.weekTasks[payload.resultIndex].tasks = state.weekTasks[
        payload.resultIndex
      ].tasks.filter((p) => p.id !== payload.id);
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setAuth(state, auth) {
      state.auth = auth;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    deletePost(state, id) {
      state.posts = state.posts.filter((p) => p.id !== id);
    },
  },
});
