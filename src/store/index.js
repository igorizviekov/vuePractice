import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    data: [
      {
        name: "BMW",
        price: 110
      },
      {
        name: "Apple",
        price: 220
      },
      {
        name: "Google",
        price: 330
      },
      {
        name: "Twitter",
        price: 440
      }
    ],
    stocks: [],
    funds: 2000,
    error: false,
    isDropdownOpen: false
  },
  getters: {
    data: state => {
      return state.data;
    },
    stock: state => {
      return state.stocks;
    },
    funds: state => {
      return state.funds;
    },
    error: state => {
      return state.error;
    },
    isDropdownOpen: state => {
      return state.isDropdownOpen;
    }
  },
  actions: {
    save({ commit }) {
      commit("save");
    },
    load({ commit }) {
      commit("load");
    }
  },
  mutations: {
    toggleDropdown(state) {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    save(state) {
      axios
        .put(
          "https://hooks-training-4903c.firebaseio.com/stocks.json",
          state.stocks
        )
        .then(response => {
          state.isDropdownOpen = false;
          console.log(response);
        });
    },
    load(state) {
      axios
        .get("https://hooks-training-4903c.firebaseio.com/stocks.json")
        .then(response => {
          state.stocks = response.data;
          state.isDropdownOpen = false;
          console.log(response);
        });
    },
    buyStock(state, payload) {
      const stockPrice = payload.quantity * payload.price;
      const record = state.stocks.find(element => element.id === payload.id);
      if (state.funds >= stockPrice) {
        state.error = false;
        if (record) {
          record.quantity =
            parseInt(record.quantity) + parseInt(payload.quantity);
          state.funds = state.funds - stockPrice;
        } else {
          state.stocks.push({
            name: payload.name,
            id: payload.id,
            price: payload.price,
            quantity: parseInt(payload.quantity)
          });
          state.funds = state.funds - stockPrice;
          console.log(state.stocks);
        }
      } else {
        state.error = true;
      }
    },
    sellStock(state, payload) {
      const record = state.stocks.find(element => element.id === payload.id);
      const itemPrice = payload.sellQuantity * payload.price;
      if (record.quantity > payload.sellQuantity) {
        record.quantity = record.quantity - payload.sellQuantity;
        state.funds = state.funds + itemPrice;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
        state.funds = state.funds + itemPrice;
      }
    },
    endDay(state) {
      state.data.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      });
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      });
    }
  }
});
