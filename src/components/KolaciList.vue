<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="kolaciTable"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>

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
    <b-button v-on:click="goToReservation()" >Reserve</b-button>
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
        'kolaciInformation'
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
      'setKolaciInformation'
    ]),

    rowClicked(record) {
      this.setKolaciInformation(record);
    },
    goToReservation() {
      if (this.token !== "") {
        let kolaciReservation = this.kolaciInformation
        console.log(kolaciReservation);
        this.$router.push({ name: 'Reservations', params: { kolaciReservation } });
      }
      else alert("You must be logged in!");
    }
  }
}
</script>


<style scoped>


</style>