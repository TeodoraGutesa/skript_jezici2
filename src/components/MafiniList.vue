<template>
  <div>

    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="mafiniTable"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="mafiniTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button v-on:click="goToReservation()" >Buy</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "MafiniList",

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
      'mafini',
      'token',
        'mafiniInformation',
        'purchaseInformation',
        'purchases'
    ]),
    mafiniTable: function () {
      return this.mafini;
    }
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {

    ...mapMutations([
      'setMafiniInformation',
      'setPurchasesInformation'
    ]),

    rowClicked(record) {
      this.setMafiniInformation(record);
    },
    goToReservation() {
      if (this.token !== "") {
        //let mafinReservation = this.mafiniInformation
        //console.log(mafinReservation);
        //this.$router.push({ name: 'Reservations', params: { mafinReservation } });
      
       var mafin_object = {
            naziv: this.mafiniInformation.naziv,
            cena: this.mafiniInformation.cena
        };
      
       this.setMafiniInformation("");
       this.purchases.push(mafin_object);
       this.$router.push({ name: 'Purchase'});

      
      }
      else alert("You must be logged in");
    }
  }
}
</script>


<style scoped>


</style>