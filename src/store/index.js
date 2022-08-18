import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    torte: [],
    torta: null,
    torteInformation: {
      naziv: ''
    }

  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setTorteInformation(state, torta) {
      // state.flightInformation.id = flight.id;
      state.torteInformation.naziv = torta.naziv;
     
    },
    
    setTorte(state, torte) {
      state.torte = torte;
    }
  },
  actions: {
    register({ commit }, obj) {
      //console.log(obj)
      fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
               console.log(tkn.token)
              commit('setToken', tkn.token)
            }
          });
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              // console.log(tkn.token)
              // console.log(tkn.userId)
              commit('setToken', tkn.token)
             // commit('setLoggedUserId', tkn.userId)
            }
          });
    },
    fetchFlights({ commit }){
      fetch('http://localhost:7000/admin/torte',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setTorte', res));
    }
    

  },
  modules: {
  }
})
