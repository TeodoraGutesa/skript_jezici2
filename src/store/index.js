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
    },
    kolaci: [],
    kolac: null,
    kolaciInformation:{
      naziv: '', cena: ''
    },
    mafini: [],
    mafin: null,
    mafiniInformation:{
      naziv: '', cena: ''
    },
    
    purchases: [],
    purchase: null,
    purchaseInformation:{
      naziv: '', cena: ''
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
      state.torteInformation.naziv = torta.naziv;
     
    },
    
    setTorte(state, torte) {
      state.torte = torte;
    },
     setKolaciInformation(state, kolac){
      state.kolaciInformation.naziv = kolac.naziv;
      state.kolaciInformation.cena = kolac.cena;
     },

     setKolaci(state, kolaci){
       state.kolaci = kolaci;
     },
     setMafiniInformation(state, mafin){
      state.mafiniInformation.naziv = mafin.naziv;
      state.mafiniInformation.cena = mafin.cena;
     },

     setMafini(state, mafini){
       state.mafini = mafini;
     },

     setPurchasesInformation(state, purchase){
      state.purchasesInformation.naziv = purchase.naziv;
      state.purchasesInformation.cena = purchase.cena;
     },

     setPurchases(state, purchases){
       state.purchases = purchases;
     },

     /*
     addPurchase(state, obj) {
     
    }
    */


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

    fetchTorte({ commit }){
      fetch('http://localhost:7000/admin/torte',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setTorte', res));
    },
    

    //dodato za kolace
    fetchKolaci({ commit }){
      fetch('http://localhost:7000/admin/kolaci',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setKolaci', res));
    },

      //dodato za mafine
      fetchMafini({ commit }){
        fetch('http://localhost:7000/api/mafini',{
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
          method: 'GET'
        })
            .then( obj => obj.json() )
            .then( res => commit('setMafini', res));
      },
  /*
      socket_purchase({ commit }, msg) {
        const purchase = JSON.parse(msg);
        commit('addComment', { purchase: purchase});
      }
  */
  
  
  },
  modules: {
  }


})
