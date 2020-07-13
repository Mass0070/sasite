<template>
  <div class="stats">
    <h1 class="Online">Online: {{ players.online }}/{{ players.max }}</h1>
    <p><span v-html="motd"></span></p>
  </div>
</template>

<style>
.stats {
  background-color:#E1C699; 
  margin: auto; 
  text-align: center; 
  align-items: center; 
  justify-content: center; 
  align-self: center; 
  box-sizing: content-box; 
  width: 400px; 
  height: auto; 
  border-radius: 40px;
  
}
.Online {
  margin: 0 auto;
}
</style>

<script defer>
import axios from 'axios'
export default {
  data () {
    return {
      motd: '',
      players: ''
    }
  },
  mounted () {
    axios
      .get('https://api.mcsrvstat.us/2/superawesome.dk')
      .then(response => {
        this.motd = response.data.motd.html[0]
        this.players = response.data.players
      })
  }
}
</script>
