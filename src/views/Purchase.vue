<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="AAA"/>
    <h1>Korpa</h1>
    <ul class="list-group">
      <li class="list-group-item">Naziv: {{this.torteInformation.naziv}}</li>
    </ul>
    <b-button v-on:click="goToPrivateLessons()" >Cancel lesson</b-button>
  </div>
</template>




<script>
import Header from '@/components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Reservations',

  components: {
    Header
  },

  props: {
    torta: Object
  },

  computed: {
    ...mapState([
      'token',
      'torteInformation',
      'torta'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    ...mapActions([
    ]),

    ...mapMutations([
      'removeToken',
      'setToken',
      'setTorteInformation'
    ]),

    logout() {
      this.removeToken();
    },
    goToPrivateLessons() {
      if (this.token !== "") {
        
        this.setTorteInformation("");
        this.$router.push({ name: 'Torte'});

      }
      else alert("You must be logged in!");
    }
  },

  sockets: {
    error(err) {
      alert(err);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>