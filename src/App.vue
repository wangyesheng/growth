<template>
  <div class="app-container">
    <Nav></Nav>
    <div class="content-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./views/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 4%);

  .content-wrap {
    padding: 20px 10px;
  }
}
</style>
