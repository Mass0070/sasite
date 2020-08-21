<template>
  <div>
    <div class="stats">
      <h1 class="Online">Online: <span>{{ players.online }}</span>/<span>{{ players.max }}</span></h1>
      <p><span v-html="motd"></span></p>
    </div>

    <div class="Server-stats">
      <div class="Server-stats-module">
        <h1 class="Online">Online: <span>{{ players.online }}</span>/<span>{{ players.max }}</span></h1>
        <p><span v-html="motd"></span></p>
      </div>
    </div>

    <img class="img-responsive">
      <iframe align="right" src="https://canary.discordapp.com/widget?id=313097609948430336&theme=dark" width="18%" height="700" allowtransparency="true" frameborder="1"></iframe>
  </div>
  
</template>

<style>
.Server-stats {
  max-width: 350px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, blue, green);
  padding: 4px;
  margin: auto;
  margin-top: 20px;
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
  margin: auto;
  color: green;
}
#Discord{
  color: white;
  text-align: right;
  background-color: #1f94e0;
  font-size: 10px;
  padding-right: 8em;
  height: 5em;
  line-height: 5em;
  width: 18%;
  margin-left: calc(100% - 18% - 10px);
  border-radius: 7px;
  }
iframe{
  margin-bottom: 30px;
  margin-right: 10px;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  -moz-box-shadow: 4px 4px 14px #000;
  -webkit-box-shadow: 4px 4px 14px #000;
  box-shadow: 4px 4px 14px #000;
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
