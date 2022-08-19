<template>
  <div>
    <KolaciList/>
  </div>

</template>

<script>

import KolaciList from '@/components/KolaciList.vue';
import {mapActions} from 'vuex';

export default {
  name: "kolaci",

  components: {
    KolaciList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchKolaci();
  },

  computed: {
    // ...mapState([
    //   'faculties'
    // ])
  },

  methods: {
    ...mapActions([
      'fetchKolaci'
    ])
  }


}
</script>


<style scoped>


</style>