<template>
  <div>
    <MafiniList/>
  </div>

</template>

<script>

import MafiniList from '@/components/MafiniList.vue';
import {mapActions} from 'vuex';

export default {
  name: "mafini",

  components: {
    MafiniList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchMafini();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchMafini'
    ])
  }


}
</script>


<style scoped>


</style>