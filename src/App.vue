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
  background:
    url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freecreatives.com%2Fwp-content%2Fuploads%2F2016%2F02%2FBlack-wood-Background-for-website-Background.jpg&f=1&nofb=1");
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
