<template>
  <div class="Portfolio">
    <h1>Your Portfolio</h1>
    <main>
      <section v-for="(item, index) in stock" :key="index">
        <PortfolioCard
          :title="item.name"
          :quantity="item.quantity"
          :price="item.price"
          :id="item.id"
        />
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortfolioCard from "./PortfolioCard";
export default {
  name: "Portfolio",
  components: {
    PortfolioCard
  },
  computed: {
    ...mapGetters(["stock"])
  }
};
</script>

<style scoped lang="scss">
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
}
</style>
