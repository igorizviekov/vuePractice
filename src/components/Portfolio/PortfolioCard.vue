<template>
  <card>
    <h2 slot="title">{{ title }}</h2>
    <p slot="price">price: ${{ price }}</p>
    <p slot="quantity">quantity: {{ quantity }}</p>
    <input type="number" placeholder="Quantity" v-model="sellQuantity" required />
    <button
      :disabled="sellQuantity > quantity || sellQuantity === null"
      @click="
        sellStock(
          {name: title,
          price: price,
          id: id,
          sellQuantity: sellQuantity
        }, sellQuantity= null)
      "
    >SELL</button>
  </card>
</template>

<script>
import { mapMutations } from "vuex";
import Card from "../../UI/Card";
export default {
  name: "PortfolioCard",
  components: {
    Card
  },
  data() {
    return {
      sellQuantity: null
    };
  },
  props: {
    title: {
      type: String
    },
    price: {
      type: Number
    },
    quantity: {
      type: Number
    },
    id: {
      type: Number
    }
  },
  methods: {
    ...mapMutations(["sellStock"])
  }
};
</script>

<style scoped lang="scss"></style>
