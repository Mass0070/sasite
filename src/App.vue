<template>
  <div id="app">
    <div id="Navbar">
      <navbar />
    </div>
    <div id="Router">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
  background: url("/SA.jpeg");
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  text-align: left;
  background-color: #fff;
  line-height: normal;
}
</style>

<script defer>
import navbar from "./components/navbar";
export default {
  name: "app",
  components: {
    navbar,
  },
};
</script>
