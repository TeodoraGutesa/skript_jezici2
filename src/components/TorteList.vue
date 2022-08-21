<template>
  <div>
   
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="torteTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="torteTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button v-on:click="goToBag()" >Buy</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "TorteList",

  data() {
    return {
      fields: ['naziv'],
      items: [],
      currentPage: 1,
      perPage: 10,
    }
  },

  computed: {
    ...mapState([
      'torte',
      'token',
        'torteInformation',
        'purchaseInformation',
        'purchases'

    ]),
    torteTable: function () {
      return this.torte;
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setTorteInformation',
      'setPurchasesInformation'
    ]),

    rowClicked(record) {
      this.setTorteInformation(record);
    },
    goToBag() {
      if (this.token !== "") {
      
      var torta_object = {
        naziv: this.torteInformation.naziv
      };
     
       //this.setTorteInformation("");
       this.purchases.push(torta_object);
       this.$router.push({ name: 'Purchase'});

       //emituje poruku serveru
       //this.$socket.emit('purchase', { body: torta_object, token: this.token });
    

      }
      else alert("You must be logged in!");
    }
  }
}
</script>


<style scoped>


</style>