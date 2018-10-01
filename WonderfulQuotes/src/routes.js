import UserHome from "./components/Routing/UserHome.vue";
import UserHeader from "./components/Routing/UserHeader.vue";

const User = resolve => {
  require.ensure(
    ["./components/Routing/User.vue"],
    () => {
      resolve(require("./components/Routing/User.vue"));
    },
    "user"
  );
};

const UserDetail = resolve => {
  require.ensure(
    ["./components/Routing/UserDetail.vue"],
    () => {
      resolve(require("./components/Routing/UserDetail.vue"));
    },
    "user"
  );
};

const UserEdit = resolve => {
  require.ensure(
    ["./components/Routing/UserEdit.vue"],
    () => {
      resolve(require("./components/Routing/UserEdit.vue"));
    },
    "user"
  );
};

const UserStart = resolve => {
  require.ensure(
    ["./components/Routing/UserStart.vue"],
    () => {
      resolve(require("./components/Routing/UserStart.vue"));
    },
    "user"
  );
};
// import User from "./components/Routing/User.vue";
// import UserDetail from "./components/Routing/UserDetail.vue";
// import UserEdit from "./components/Routing/UserEdit.vue";
// import UserStart from "./components/Routing/UserStart.vue";

export const routes = [
  {
    path: "",
    name: "home",
    components: { default: UserHome, "header-top": UserHeader }
  },
  {
    path: "/user",
    components: { default: User, "header-bottom": UserHeader },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("inside route setup");
          next();
        }
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: "/" }
];
