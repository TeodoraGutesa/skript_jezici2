<template>
   <div>
    <PurchaseList/>
  </div>
</template>


<script>
import PurchaseList from '@/components/PurchaseList.vue';
import { mapActions } from 'vuex';

export default {
  name: "Purchase",

  components: {
   PurchaseList
  
  },

  data() {
     return{

     } 
  },

  computed: {
  
  },

  mounted() {
  
  },

    methods: {
    ...mapActions([
      
    ])
  }

}
 
</script>

<style scoped>

</style>