<template>
  <card>
    <h2 slot="title">{{ title }}</h2>
    <p slot="price">price: {{ price }}</p>
    <input type="number" placeholder="Quantity" required v-model="quantity" />
    <button
      @click="
        buyStock({
          name: title,
          price: price,
          quantity: quantity,
          id: id}, quantity = null)"
      :disabled="quantity <= 0"
    >BUY</button>
  </card>
</template>

<script>
import { mapMutations } from "vuex";
import Card from "../../UI/Card";
export default {
  name: "StockCard",
  components: {
    Card
  },
  data() {
    return {
      quantity: null
    };
  },

  props: {
    title: {
      type: String
    },
    price: {
      type: Number
    },
    id: {
      type: Number
    }
  },

  methods: {
    ...mapMutations(["buyStock"])
  }
};
</script>

<style scoped lang="scss"></style>
