<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hjem</router-link> |
      <router-link v-if="profile === true" to="/login">Login</router-link>
      <router-link v-else-if="profile === false" to="/profile">Profile</router-link>
      <router-link v-else to="/logout">Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: green;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 20px;
  color: wheat;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15'%3e %3crect width='50' height='50' fill='%23282828'/%3e %3ccircle cx='3' cy='4.3' r='1.8' fill='%23393939'/%3e %3ccircle cx='3' cy='3' r='1.8' fill='black'/%3e %3ccircle cx='10.5' cy='12.5' r='1.8' fill='%23393939'/%3e %3ccircle cx='10.5' cy='11.3' r='1.8' fill='black'/%3e %3c/svg%3e") 
}
</style>

<script defer>
export default {
  data () {
    return {
      profile: {}
    }
  }, 
  mounted () {
    if(localStorage.token) {
      this.profile = false;
    } else {
      this.profile = true;
    }
  }
}
</script>
