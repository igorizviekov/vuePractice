<template>
  <div class="StockTrader">
    <h1>Stock Trader</h1>
    <main>
      <h2>Trade or View your Portfolio</h2>
      <p>You may save and Load your Data</p>
      <p>Click 'End Day' to begin a new day!</p>
      <h4>Your Funds: ${{funds}}</h4>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StockTrader",
  computed: {
    ...mapGetters(["funds"])
  }
};
</script>

<style scoped lang="scss">
main {
  margin: auto;
  width: 50%;
  text-align: left;
  padding: 2%;
  background-color: rgb(248, 247, 247);
}
</style>
