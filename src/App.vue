<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <router-view/>
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

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
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
