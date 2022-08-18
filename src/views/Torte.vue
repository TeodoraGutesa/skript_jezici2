<template>
  <div>
    <TorteList/>
  </div>

</template>

<script>

import TorteList from '@/components/TorteList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Torte",

  components: {
    TorteList
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