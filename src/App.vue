<template>
  <div id="app">
    <div id="Navbar">
      <navbar />
    </div>
    <div id="Router">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
  background: url("/SA.jpeg");
}
</style>

<script defer>
import navbar from "./components/navbar"
export default {
  name: 'app', 
  components: {
    navbar
  }
}
</script>
