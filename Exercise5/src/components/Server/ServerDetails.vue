<template>
  <div class='col-xs-12 col-sm-6'>
    <p v-if='!server'>Please select a Server</p>
    <p v-if='server'>Server # {{ server.id}} selected, Statu: {{ server.status }}</p>
    <button v-if='server' @click='resetStatus'> Reset</button>
  </div>
</template>
<script>
import { serverBus } from '../../main.js';

export default {
  data: function() {
    return {
      server: null
    }
  },
  methods: {
    resetStatus() {
      this.server.status = 'DDD';
    }
  },
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  }
}
</script>
