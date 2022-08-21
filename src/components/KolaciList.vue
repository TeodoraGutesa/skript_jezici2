<template>
  <div>
  
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="kolaciTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="kolaciTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button v-on:click="goToReservation()" >Buy</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "KolaciList",

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
      'kolaci',
      'token',
        'kolaciInformation',
        'purchaseInformation',
        'purchases'
    ]),
    kolaciTable: function () {
      return this.kolaci;
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setKolaciInformation',
      'setPurchasesInformation'
    ]),

    rowClicked(record) {
      this.setKolaciInformation(record);
    },
    goToReservation() {
      if (this.token !== "") {
       
        var kolac_object = {
            naziv: this.kolaciInformation.naziv,
            cena: this.kolaciInformation.cena
        };
      
       this.setKolaciInformation("");
       this.purchases.push(kolac_object);
       this.$router.push({ name: 'Purchase'});


      
      }
      else alert("You must be logged in!");
    }
  }
}
</script>


<style scoped>


</style>