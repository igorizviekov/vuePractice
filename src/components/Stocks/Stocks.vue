<template>
  <div class="Stocks">
    <h1>Your Stocks</h1>
    <main>
      <section v-for="(item, index) in data" :key="index">
        <StockCard :title="item.name" :quantity="item.quantity" :price="item.price" :id="index" />
      </section>
    </main>
    <h4 v-if="error">Not enough funds</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockCard from "./StockCard";
export default {
  name: "Stocks",
  components: {
    StockCard
  },
  computed: {
    ...mapGetters(["error", "data"])
  }
};
</script>

<style scoped lang="scss">
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
}
h4 {
  color: rgb(209, 9, 9);
}
</style>
