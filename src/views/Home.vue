<template>
  <div>
    <iframe align="right" src="https://canary.discordapp.com/widget?id=313097609948430336&theme=dark" width="18%" height="700" allowtransparency="true" frameborder="0"></iframe>

    <div class="Server-stats">
      <div class="Server-stats-module">
        <h1 class="Online">Online: <span>{{ players.online }}</span>/<span>{{ players.max }}</span></h1>
        <p class="Hjemmeside-Motd"><span v-html="motd"></span></p>
      </div>
    </div>

  </div>
  
</template>

<style>

p.Hjemmeside-Motd {
    margin-top: 2.5%;
}
.Server-stats {
  max-width: 20%;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, blue, green);
  padding: 0.3%;
  margin: auto;
  margin-top: 2%;
  text-align: center; 
  box-sizing: content-box; 
}
.Server-stats-module {
  background: #222;
  color: white;
  padding: 2rem;
}
.Online span{
	color: #00b300;
}
.Online h1 {
  color: black; 
}
.Online {
  margin: auto;
  color: green;
}
iframe{
  margin-right: 1.5%;
  -moz-border-radius: 1.8%;
  -webkit-border-radius: 1.8%;
  border-radius: 1.8%;
  -moz-box-shadow: 0.6% 0.6% 1.6% #000;
  -webkit-box-shadow: 0.6% 0.6% 1.6% #000;
  box-shadow: 0.6% 0.6% 1.6% #000;
  filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=.2);
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
