<template>
  <div id="app">
    <div>
      <b-navbar class="navbar navbar-light" style="background-color: #FFC0CB; padding-left:20px; ">
        <b-navbar-brand to="/">Poslaticarnica</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Categories" right>
              <b-nav-item to="/torte" style="background-color: #87CEFA;" >Torte</b-nav-item > 
              <b-nav-item to="/kolaci" style="background-color: #87CEFA;">Kolaci</b-nav-item>
              <b-nav-item to="/mafini" style="background-color: #87CEFA;">Mafini</b-nav-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

              <b-nav-item v-if="!token" to="/register" >Register</b-nav-item> 
             <b-nav-item v-if="!token" to="/login">Log In</b-nav-item> 
             <b-nav-item v-else @click="logout()">Log Out</b-nav-item> 

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "App",
  data() {
    return {
     
    }
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
  mounted() {
    // fetch()
    //   .then(o => o.json)
    //   .then(res => this.departments = res.departments);
    if(localStorage.token){
      this.setToken(localStorage.token);
    }
  },
  methods: {
    ...mapMutations([
      'removeToken',
      'setToken'
    ]),
    search(e){
      e.preventDefault();
      // const query = this.searchQuery;
      // this.searchQuery = "";
      // this.$router.push({name: 'Search', query: {q: query}})
    },
    logout(){
      this.removeToken();
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

</style>


