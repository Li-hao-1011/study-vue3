import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";

// 配置映射关系
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    meta: {
      name: "lhhhhhhhh",
      age: 18,
      address: "sh",
    },
    component: () =>
      import(/* webpackChunkName: 'HomeChunk' */ "../pages/Home"),
    children: [
      { path: "", redirect: "/home/message" },
      { path: "message", component: () => import("../pages/HomeMessage.vue") },
      { path: "good", component: () => import("../pages/HomeGood.vue") },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: 'AboutChunk' */ "../pages/About"),
  },
  {
    path: "/user/:username/id/:id",
    name: "User",
    component: () =>
      import(/* webpackChunkName: 'AboutChunk' */ "../pages/User"),
  },

  {
    path: "/:errorPage(.*)*",
    name: "Error404",
    component: () =>
      import(/* webpackChunkName: 'AboutChunk' */ "../pages/404"),
  },
];

// 路由对象 router
const router = createRouter({
  routes,
  history: createWebHistory(),
  // history: createWebHashHistory(),
});

export default router;
