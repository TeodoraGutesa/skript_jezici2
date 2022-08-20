<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="purchaseTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

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
    <b-pagination
        v-model="currentPage"
        :total-rows="purchaseTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <b-button v-on:click="goToReservation()" >Reserve</b-button>
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "PurchaseList",

  data() {
    return {
      fields: ['naziv, 'cena'],
      items: [],
      currentPage: 1,
      perPage: 10,
    }
  },

  computed: {
    ...mapState([
      'purchase',
      'token',
        'purchaseInformation'
    ]),
    purchaseTable: function () {
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
      'setTorteInformation'
    ]),

    rowClicked(record) {
      this.setTorteInformation(record);
    },
    goToReservation() {
      if (this.token !== "") {
        let torta = this.torteInformation
        console.log(torta);
        this.$router.push({ name: 'Reservation', params: { torta } });
      }
      else alert("You must be logged in!");
    }
  }
}
</script>


<style scoped>


</style>