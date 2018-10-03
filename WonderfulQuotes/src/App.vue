<template>
    <appHome></appHome>
</template>

<script>
import Home from "./components/EX11/Home.vue";
import AnimationHome from "./components/Animation/AnimationHome.vue";
import HttpHome from "./components/Http/HttpHome.vue";
import RoutingHome from "./components/Routing/RoutingHome.vue";
import VuexHome from "./components/Vuex/VuexHome.vue";
import AxioHome from "./components/Axio/AxioHome.vue";

export default {
  components: {
    appHome: AxioHome
  }
};
</script>

<style>
</style>
