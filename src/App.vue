<template>
  <div id="app">
    <Nav />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "./UI/Nav";
export default {
  name: "StockCard",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .slide-enter-active {
    animation: slide-in 100ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 100ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
</style>
