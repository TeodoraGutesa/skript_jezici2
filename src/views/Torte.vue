<template>
  <div>
    <TorteList/>
  </div>

</template>

<script>

import TorteList from '@/components/TorteList.vue';
import {mapActions} from 'vuex';

export default {
  name: "torte",

  components: {
    TorteList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchTorte();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchTorte'
    ])
  }


}
</script>


<style scoped>


</style>