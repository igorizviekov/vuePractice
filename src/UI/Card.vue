<template>
  <div class="card">
    <title><slot name="title"></slot> <slot name="price"></slot></title>
    <section>
      <slot name="quantity" class="lol"></slot>
    </section>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped lang="scss">
.card {
  width: 20em;
  text-align: left;
  margin: 2%;
  background-color: rgb(248, 247, 247);
  section {
    padding-left: 5%;
    p {
      margin: 0;
    }
  }
  title {
    h2,
    p {
      margin: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    background-color: rgb(171, 231, 191);
  }

  main {
    padding: 2% 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      padding: 5%;
    }
    button {
      padding: 5%;
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
