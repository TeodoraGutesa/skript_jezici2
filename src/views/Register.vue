<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form name = "form" @submit="onSubmit">

      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-checkbox id="admin" v-model="checkboxes.admin" :value="true" :unchecked-value="false">Admin</b-form-checkbox>
      <b-form-checkbox id="moderator" v-model="checkboxes.moderator" :value="true" :unchecked-value="false">Moderator</b-form-checkbox>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          admin: false,
          moderator: false
        },
         checkboxes:{
          admin: false,
          moderator: false
        }  
      }
    },

    methods: {
      ...mapActions([
        'register'
      ]),

      onSubmit(e) {

        e.preventDefault();

      
              let z = document.forms["form"]["password"].value;
              if (z == "") {
               alert("Password must be filled out");
               return false;
             }else if(z.length < 5){
               alert("Password must have at least 5 characters");
               return false;
             }else if(z.length > 20){
              alert("Password must have maximum 20 characters");
              return false;
             }



        this.form.admin = this.checkboxes.admin;
        this.form.moderator = this.checkboxes.moderator;

        this.register(this.form);
         this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
