<template>
  <div>
    <MafiniList/>
  </div>

</template>

<script>

import MafiniList from '@/components/MafiniList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Flight",

  components: {
    MafiniList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchFlights();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchFlights'
    ])
  }


}
</script>


<style scoped>


</style>