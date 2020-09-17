<template>
  <div>
    <hr>
    <div v-show="username" class="Box-Profil">
      <img class="Discord-Billede" v-show="finaleUrl" v-bind:src="finaleUrl" alt="Billede" width="60" height="60">
      <div class="Box-M">
        <a class="Discord-A">Du kigger i øjeblikket på <span>{{ username }}</span>'s profil.</a>
      </div>
    </div>
    <div v-if="Array.isArray(info) && info.length > 0" class="Grid">
      <div v-for="x in info" class="Unban" :key="x.id">
        <p class="UnbanId"><a v-bind:href="'/ansøgning/'+ x.UnbanId"><span>ID:</span> {{ x.UnbanId }}</a></p>
        <p class="P-Status">Status:<br><span class="P-Status-afvis" v-if="x.status === 'Afvist'">{{ x.status }}</span><span class="P-Status-accepteret" v-else-if="x.status === 'Accepteret'">{{ x.status }}</span><span v-else>{{ x.status }}</span></p>
        <p class="P-Oprettet">Oprettet:<br><span>{{ getTime(x.createdAt) }}</span></p>
        <p class="P-Opdateret">Seneste opdateret:<br><span>{{ getTime(x.updatedAt) }}</span></p>
      </div>
    </div>
    <div v-else-if="info.length === 0" id="zeroClass">
      <div id="zeroClassdiv">
        <h1 class="Ingen-ansøgning">Du har <span>ikke</span> lavet nogen ansøgninger</h1>
      </div>
    </div>
    <div v-else-if="info === 'Ikke login' || info === 'Not authorized'" id="Notloggedin"> 
      <div id="Notloggedindiv">
        <h1 class="Notloggedindiv-span">Du er <span>ikke</span> logget ind.</h1>
        <p class="Logind">Tryk <a href="https://discord.com/oauth2/authorize?client_id=694582426474774570&redirect_uri=http%3A%2F%2Fsuperawesome.ml%2Fauth%2F&response_type=token&scope=identify">her</a> for at login.</p>
      </div>
    </div>
    <div v-else-if="info === 'Ikke fundet'" id="Notloggedin"> 
      <div id="Notloggedindiv">
        <h1 class="Notloggedindiv-span">Kunne <span>ikke</span> finde en profile med det id</h1>
        <p class="Logind">Prøv et andet id.</p>
      </div>
    </div>
    <div v-else-if="info === 'Ingen ansøgning'" id="Notloggedin"> 
      <div id="Notloggedindiv">
        <h1 class="Notloggedindiv-span">Profilen havde <span>ingen</span> ansøgninger</h1>
        <p class="Logind">Prøv et andet id.</p>
      </div>
    </div>
    <div v-else-if="Object.keys(info).length !== 0" id="Notloggedin">
      <div id="Notloggedindiv">
        <h1>{{ info }}</h1>
      </div>
    </div>
  </div>
</template>

<style>
#Notloggedin {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  background-color: #1f1e1e;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
.Notloggedindiv-span span {
  color: crimson;
}
p {
  color: black;
  font-size: 15px;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
#zeroClassdiv {
  margin: auto;
  text-align: center;
  color: #e6e6e6;
}
#zeroClassdiv span {
  color: crimson;
}
#zeroClass {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  background-color: #1f1e1e;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
.Ingen-ansøgning {
  font-size: 150%;
  margin-left: 1%;
  margin-right: 1%;
}
.UnbanId {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin-top: 10%;
  color: lightgrey;
}
.UnbanId:hover {
  opacity: 0.8
}
.UnbanId span {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
  font-size: 110%;
}
.Unban {
    margin: 0 auto;
    margin-top: 5%;
    background-color: #2f2f2f;
    border: 3px solid #1f5bbb;
    width: 225px;
    height: 225px;
    border-radius: 30px;
    text-align: center;
}
.Grid {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    grid-column-gap: 2.5%;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    margin: 0 auto;
    text-align: left;
}
.P-Status-accepteret {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
.P-Status-afvis  {
  color: crimson;
  font-family: "Times New Roman", Times, serif;
}
.P-Status {
  font-size: 125%;
  margin-top: 4%;
  color: lightgrey;
}
.P-Status span {
  font-family: "Times New Roman", Times, serif;
}
.P-Oprettet {
  font-size: 95%;
  margin-top: 4%;
  color: lightgrey;
}
.P-Oprettet span {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
.P-Opdateret {
  font-size: 95%;
  margin-top: 4%;
  color: lightgrey;
}
.P-Opdateret span {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
.Box-Profil {
  position: absolute;
  height: 15%;
  margin: 0 auto;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2f2f2f;
  border: 3px solid #197b19;
  width: 300px;
  border-radius: 30px;
  z-index: 5;
}
.Discord-A {
  text-align: center;
  margin-left: 6%;
  font-size: 105%;
  color: #e6e6e6;
}
.Discord-A span {
  color: crimson;
}
.Discord-Billede {
  border: 3px solid green;
  margin-top: 1%;
  margin-left: 1.5%;
  border-radius: 50%;
}
.Box-M {
  margin-top: 1%;
}

@media only screen and (min-width : 0px) and (max-width : 620px) {
  .Box-Profil {
    visibility: hidden;
  }
}

@media only screen and (min-width : 620px) and (max-width : 780px) {
  .Grid {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    margin: 0 auto;
    text-align: left;
  }
  .Box-Profil {
    margin: 0 auto;
    transform: translate(10%,-80%);
    background-color: #2f2f2f;
    border: 3px solid #197b19;
    width: 210px;
    height: 110px;
    border-radius: 30px;
    position: absolute;
    top: 14%;
    left: -2%;
  }
  .Discord-A {
    text-align: center;
    margin-left: 6%;
    font-size: 100%;
    color: #e6e6e6;
    top: 6%;
    left: -6%;
    position: absolute;
  }
  .Discord-Billede {
    border: 3px solid green;
    margin-top: 1%;
    margin-left: 1.5%;
    border-radius: 50%;
    top: 40%;
    left: 1%;
    position: absolute;
  }
}

@media only screen and (min-width : 780px) and (max-width : 1190px) {
  .Grid {
    display: grid;
    width: 65%;
    grid-column-gap: 50%;
    grid-template-columns: 60px 60px;
    grid-template-rows: 250px 250px;
    margin: 0 auto;
    text-align: left;
    position: absolute;
    top: 20%;
    left: 20%;
  }
  .Box-Profil {
    margin: 0 auto;
    transform: translate(10%,-80%);
    background-color: #2f2f2f;
    border: 3px solid #197b19;
    width: 270px;
    height: 125px;
    border-radius: 30px;
    position: absolute;
    top: 17%;
    left: 0;
  }
  .Discord-A {
    text-align: center;
    margin-left: 6%;
    font-size: 105%;
    color: #e6e6e6;
    top: 6%;
    left: -8%;
    position: absolute;
  }
  .Discord-Billede {
    border: 3px solid green;
    margin-top: 1%;
    margin-left: 1.5%;
    border-radius: 50%;
    top: 42%;
    left: 1%;
    position: absolute;
  }
}
@media only screen and (min-width : 1190px) and (max-width : 6000px) {
  /* For desktop: */
  #Notloggedindiv {
    margin: auto;
    text-align: center;
    color: #e6e6e6;
  }
  .Notloggedindiv-span span {
    color: crimson;
  }
  .Ingen-ansøgning {
    font-size: 200%;
  }
  .UnbanId {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin-top: 3.5%;
  }
  .Unban {
      margin: 0 auto;
      background-color: #2f2f2f;
      border: 3px solid #1f5bbb;
      width: 225px;
      height: 225px;
      border-radius: 30px;
      text-align: center;
  }
  .Grid {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: grid;
      width: 65%;
      grid-column-gap: 2.5%;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(250px, auto);
      margin: 0 auto;
      text-align: left;
  }
  .Box-Profil {
    position: absolute;
    top: 0;
    left: 0;
    height: 15%;

    margin: 0 auto;
    top: 14%;
    left: 15%;
    transform: translate(-50%, -50%);
    background-color: #2f2f2f;
    border: 3px solid #197b19;
    width: 350px;
    height: 100px;
    border-radius: 30px;
  }
  .Discord-A {
    text-align: center;
    margin-left: 6%;
    font-size: 105%;
    color: #e6e6e6;
    position: absolute;
    top: 8px;
    left: -8%;
  }
  .Discord-A span {
    color: crimson;
  }
  .Discord-Billede {
    border: 3px solid green;
    margin-top: 8.5%;
    margin-left: 1.5%;
    border-radius: 50%;
  }
  .Box-M {
    margin-top: 1%;
  } 
}
</style>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      info: false,
      username: false,
      userid: false,
      finaleUrl: false
    }
  },
  async created() {
    let profile;
    profile = await this.$route.params.id;
    if(!profile) profile = "";
    await axios.get('https://api.superawesome.ml/api/user/' + profile, {
        headers: {
            "API-Key": `${localStorage.token}`
        }
    })
    .then(async(response) => {
      switch(response.status) {
        case 200:
          break;
        case 401:
          this.info = "Ikke adgang"
          break;
        case 402:
          this.info = "Ingen ansøgning"
          break;
        case 405:
          this.info = "Ikke fundet"
          break;
        case 403:
          this.info = "Not authorized"
          break;
        case 500:
          this.info = "Fejl, kontakt venlist staffs."
          break;
      }
      if(!this.info) {
        this.info = response.data
      } 
      if(response.status === 402 || response.status === 200) {
        let filetype = ".png"
        this.userid = await response.data.shift().userid
        this.avatar = await response.data.shift().avatar
        this.username = response.data.shift().username
        if(this.avatar.startsWith("a_")) {
          filetype = ".gif"
        } 
        this.finaleUrl = "https://cdn.discordapp.com/avatars/" + this.userid + "/" + this.avatar + filetype + "?size=256";
      }
    })  
    .catch(async (error) => {
      if(error.response) {
        switch(error.response.status) {
          case 200:
            break;
          case 401:
            this.info = "Ikke adgang"
            break;
          case 402:
            this.info = "Ingen ansøgning"
            break;
          case 405:
            this.info = "Ikke fundet"
            break;
          case 403:
            this.info = "Not authorized"
            break;
          case 500:
            this.info = "Fejl, kontakt venlist staffs."
            break;
        }
        if(!this.info) {
          this.info = "Fejl, kontakt venlist staffs. Skriv fejlkoden 416 til dem"
        }
        if(error.response.status === 402 || error.response.status === 200) {
          let filetype = ".png"
          this.userid = await error.response.data.shift().userid
          this.avatar = await error.response.data.shift().avatar
          this.username = await error.response.data.shift().username
          if(this.avatar && this.avatar.startsWith("a_")) {
            filetype = ".gif"
            this.finaleUrl = "https://cdn.discordapp.com/avatars/" + this.userid + "/" + this.avatar + filetype + "?size=256";
          } 
        }
      }
    })
  },
  methods: {
    getTime: function (time) {
      moment.locale("da")
      return moment(time).format("D MMMM YYYY HH:MM")
    }
  }
}
</script>