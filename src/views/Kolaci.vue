<template>
  <div>
    <KolaciList/>
  </div>

</template>

<script>

import KolaciList from '@/components/KolaciList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Flight",

  components: {
    KolaciList
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