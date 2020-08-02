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
  padding: auto;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15'%3e %3crect width='50' height='50' fill='%23282828'/%3e %3ccircle cx='3' cy='4.3' r='1.8' fill='%23393939'/%3e %3ccircle cx='3' cy='3' r='1.8' fill='black'/%3e %3ccircle cx='10.5' cy='12.5' r='1.8' fill='%23393939'/%3e %3ccircle cx='10.5' cy='11.3' r='1.8' fill='black'/%3e %3c/svg%3e") 
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
