<template>
  <nav id="nav">
    <router-link to="/">Stock Trader</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/stocks">Stocks</router-link>
    <section>
      <button @click="endDay">End Day</button>
      <div class="dropdown">
        <button
          class="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleDropdown"
        >
          Save & Load
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          :class="{ show: isDropdownOpen, 'dropdown-menu': true }"
        >
          <a class="item" href="#" @click="save"> Save Data </a>
          <a class="item" href="#" @click="load"> Load Data </a>
        </div>
      </div>
      <p>Funds: ${{ funds }}</p>
    </section>
  </nav>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapGetters(["funds", "isDropdownOpen"])
  },
  methods: {
    ...mapMutations(["endDay", "toggleDropdown"]),
    ...mapActions(["save", "load"])
  }
};
</script>

<style lang="scss">
#nav {
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: rgb(236, 236, 236);
  .item {
    display: flex;
    &:hover {
      color: darken(lightgrey, 35%);
    }
  }
  button {
    border: none;
    background-color: inherit;
  }
  section {
    margin-left: auto;
    p {
      padding-left: 1em;
      display: flex;
      align-items: center;
      margin: 0;
    }
    display: flex;
  }
  a {
    margin-left: 1em;
    text-decoration: none;
    font-weight: bold;
    color: #c6c9c7;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
