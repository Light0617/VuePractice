<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Routing</h1>
                <hr>
                <router-view name='header-top'></router-view>
                <transition name='slide' mode='out-in'>
                  <router-view></router-view>
                </transition>
                <router-view name='header-bottom'></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import UserHeader from "./UserHeader.vue";

export default {
  components: {
    appUserHeader: UserHeader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
