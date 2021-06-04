<template>
  <div class="app-container">
    <Header />
    <div class="main-wrap">
      <div class="inner p20 bs4">
        <Nav />
        <div class="content-wrap">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import Nav from "./views/Nav";
export default {
  components: {
    Header,
    Nav,
  },
};
</script>

