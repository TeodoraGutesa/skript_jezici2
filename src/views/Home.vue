<template>
  <div class="home">
    <img alt="Kolaci slika" src="../assets/orange-cardamom-butter-cakes-with-rose-water-icing-FT-RECIPE0721.jpg" width = 100% height = 5>
    <HelloWorld msg="Poslaticarnica"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
