import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";

import { store } from './store/store';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  next();
});

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

Vue.filter("countNumber", function(value) {
  return value.length;
});

Vue.mixin({
  created() {
    console.log("Global mixin created");
  }
});

Vue.http.options.root = "https://vue-app-51a04.firebaseio.com";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // if (request.method == "POST") {
  //   requst.method = "PUT";
  // }
  // next(response => {
  //   response.json = () => {
  //     return {
  //       message: response.body
  //     };
  //   };
  // });
});

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = "green";
    //el.style.backgroundColor = binding.value;
    if (binding.arg == "background") {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
