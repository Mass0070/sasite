<template>
  <div>
    <iframe align="right" src="https://canary.discordapp.com/widget?id=313097609948430336&theme=dark" width="350" height="675" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    <div class="stats">
      <h1 class="Online">Online: <span>{{ players.online }}</span>/<span>{{ players.max }}</span></h1>
      <p><span v-html="motd"></span></p>
    </div>
  </div>
  
</template>

<style>
.Online span{
	color: #00b300;
}
.Online h1 {
  color: black; 
}
.stats {
  background-color:#E1C699; 
  margin: auto; 
  margin-top: 10px;
  text-align: center; 
  box-sizing: content-box; 
  width: 400px; 
  height: auto; 
  border-radius: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.stats:hover {
  background-color:#d8bb88; 
  margin: auto; 
  margin-top: 10px;
  text-align: center; 
  box-sizing: content-box; 
  width: 400px; 
  height: auto; 
  border-radius: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.Online {
  margin: 0 auto;
  color: green;
}
iframe {
    margin-top: 30px;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=.2);
}
</style>

<script defer>
import axios from 'axios'
export default {
  data () {
    return {
      motd: 'Indlæser!',
      players: 'Indlæser!'
    }
  },
  async created() {
    axios
      .get('https://api.mcsrvstat.us/2/superawesome.dk')
      .then(response => {
        this.motd = response.data.motd.html[0]
        this.players = response.data.players
      })
  }
}
</script>
