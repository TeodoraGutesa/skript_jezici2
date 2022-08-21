<template>
  <div>
    <h1>Kupovina</h1>

    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="purchaseTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>


  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  name: "PurchaseList",

  props: {
    
  },

  data() {
    return {
      fields: ['naziv', 'cena'],
      items: [],
      currentPage: 1,
      perPage: 10,
    }
  },

  computed: {
    ...mapState([
      'purchases',
      'token',
        'purchaseInformation'
    ]),
    purchaseTable: function () {
      return this.purchases;
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
        'removeToken',
        'setToken',
      'setPurchaseInformation'
    ]),

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
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

</style>