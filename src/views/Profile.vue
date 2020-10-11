<template>
  <div>
    <hr>
    <div style="display: inline-flex; padding-top: 1%; padding-bottom: 1%;">
      <div v-show="username" class="Discord-Boks">
        <a class="Discord-Profil">
          <img v-show="finaleUrl" v-bind:src="finaleUrl" alt="Billede" width="128" height="128">
        </a>

        <div class="Discord-Navn">
          <div class="Discord-Navn-P">Discord konto<span>:</span></div>
          <span>{{ username }}</span>
        </div>
      </div>
    </div>

    <div class="Links" v-show="Linked">
      <div class="LinkedKontoer">Minecraft kontoer<span>:</span></div>
      <div v-for="x in Linked" :key="x.uuid" class="Links-for">
        <img :id="x.username" v-bind:src="'https://minotar.net/avatar/' + x.username" alt="Stickman" width="100" height="100">
        <b-popover :target="x.username" triggers="hover" :title="x.username" placement="bottom">
          <template v-slot-content v-if="!$route.params.id">
            <b-button pill @click="sletprofile(x.uuid)" variant="danger">Slet kontoen</b-button>
          </template>
        </b-popover>
      </div>
      <div class="Button-Plus-Div" v-if="!$route.params.id">
        <b-button variant="success">
          <b-icon v-b-modal="'Plus'" icon="plus" aria-label="Help" class="Button-Plus-Icon"></b-icon>
          <b-modal @ok="Add" id="Plus">
            <b-form-input v-model="code" id="Number" type="number" placeholder="Indtast koden"></b-form-input>
          </b-modal>
        </b-button>
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
    <div v-else-if="info === 'Ingen ansøgning'" id="zeroClass">
      <div id="zeroClassdiv">
        <h1 class="Ingen-ansøgning">{{ (this.$route.params.id ? "Profilen": "Du") }} har <span>ikke</span> lavet nogen ansøgninger</h1>
      </div>
    </div>
    <div v-else-if="info === 'Ikke login' || info === 'Not authorized'" id="Notloggedin"> 
      <div class="Notloggedindiv2">
        <h1 class="Notloggedindiv-span">Du er <span>ikke</span> logget ind.</h1>
        <p class="Logind">Tryk <a href="https://discord.com/oauth2/authorize?client_id=694582426474774570&redirect_uri=http%3A%2F%2Fsuperawesome.ml%2Fauth%2F&response_type=token&scope=identify">her</a> for at login.</p>
      </div>
    </div>
    <div v-else-if="info === 'Ikke fundet'" id="Notloggedin"> 
      <div class="Notloggedindiv2">
        <h1 class="Notloggedindiv-span">Profilen med dette id kunne <span>ikke</span> findes.</h1>
        <p class="Logind">Måske har profilen ikke nogen ansøgninger, men ellers prøv et andet id.</p>
      </div>
    </div>
    <div v-else-if="Object.keys(info).length !== 0" id="Notloggedin">
      <div class="Notloggedindiv2">
        <h1 class="Notloggedindiv2">{{ info }}</h1>
      </div>
    </div> 
  </div>
</template>

<style>
#zeroClassdiv {
  margin: auto;
  text-align: center;
  color: #e6e6e6;
}
#zeroClassdiv span {
  color: crimson;
}
#zeroClass {
  margin: auto;
  margin-top: 10%;
  display: grid;
  background-color: #1f1e1e;
  border-radius: 30px;
  width: 65%;
  grid-auto-rows: minmax(250px, auto);
}

#Notloggedin {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: grid;
  background-color: #1f1e1e;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(1,1fr);
  grid-auto-rows: minmax(250px,auto);
  margin: 0 auto;
  border: 2px solid crimson;
  border-radius: 30px;
  text-align: center;
}
.Notloggedindiv2 {
  color: #e6e6e6;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 50px;
  padding-bottom: 40px;
}

p {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: lightgrey;
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}


.Links {
  display: inline-flex;
  padding-left: 45px;
}
.Links img {
    border-radius: 50%;
    border: 3px dotted #c60cc4;
}
.Links button {
  z-index: 2;
  border-radius: 50%;
  border: 3px dotted #c60cc4;
}
.Links-for {
  padding-top: 2.5em;
  padding-left: 0.5em;
}
.Button-Plus-Div {
  padding-top: 2.5em;
  padding-left: 0.5em;
}
.Button-Plus-Icon {
  width: 85px;
  height: 85px;
}
.btn-success {
  background-color: #28a745;
}


.Unban {
  margin: 0 auto;
  background-color: #2f2f2f;

  border: 4px solid #1f5bbb;
  border-radius: 30px;
  text-align: center;
  transition: .7s;
}
.Unban:hover {
  border: 4px solid green;
  transform: scale(.9);
  transition: .7s;
}
.Grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-auto-rows: 260px;
  margin-top: 15px;
}

.UnbanId {
  font-size: 22px;
  text-decoration: none;
  margin-top: 5%;
  color: lightgrey;
}
.UnbanId span {
  color: #04ef04;
  font-size: 22px;
}


.P-Status {
  margin-top: 10px;
}
.P-Status-accepteret {
  font-size: 19px;
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
.P-Status-afvis  {
  font-size: 19px;
  color: crimson;
  font-family: "Times New Roman", Times, serif;
}


.P-Oprettet {
  margin-top: 8px;
}
.P-Oprettet span {
  font-size: 19px;
  color: #04ef04;
}
.P-Opdateret {
  margin-top: 8px;
}
.P-Opdateret span {
  font-size: 19px;
  color: #04ef04;
}


.Discord-Boks {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 2em;
}
.Discord-Profil img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: -25px 10px;
  border: 3px outset orange;
}
.Discord-Profil {
  display: block;
  width: 40px;
  height: 40px;
}
.Discord-Navn {
  font-size: 110%;
  font-family: 'DM Mono', monospace;
  color: white;
  margin-left: 1em;
}
.Discord-Navn span {
  color: crimson;
}
.LinkedKontoer {
  position: absolute;
  font-size: 120%;
  font-family: 'DM Mono', monospace;
  color: white;
  padding-top: 5px;
}
.LinkedKontoer span {
  color: crimson;
}
</style>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
import Dropdown from './../components/Dropdown'
import { BPopover, BIcon, BButton, BIconPlus } from 'bootstrap-vue'
export default {
  data () {
    return {
      info: false,
      username: false,
      userid: false,
      finaleUrl: false,
      Linked: false,
      code: ''
    }
  },
  components: {
    Dropdown,
    BPopover,
    BButton,
    BIcon,
    BIconPlus
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
          if(this.avatar) {
            this.finaleUrl = "https://cdn.discordapp.com/avatars/" + this.userid + "/" + this.avatar + filetype + "?size=256";
          } else {
            this.finaleUrl = "https://cdn.discordapp.com/embed/avatars/0.png?size=256"
          }
        }
      }
    })
    this.UpdateLinks()
  },
  methods: {
    getTime: function (time) {
      return dayjs(time).locale("da").format("D MMMM YYYY HH:MM")
    },
    Add: function() {
      axios.post('https://api.superawesome.ml/api/verify/' + this.code, {}, {
        headers: {
          "API-Key": `${localStorage.token}`
        }
      })
      this.UpdateLinks()
      this.code = ''
    },
    sletprofile: async function(uuid) {
      await axios.delete('https://api.superawesome.ml/api/verify/' + uuid, {
        headers: {
            "API-Key": `${localStorage.token}`
          }
      })
      .then(async(response) => {
        if(response.data.success) return console.log("Slettet " + uuid);
        console.log("Ikke slettet")
      })
      .catch(error => {
        console.log("Error " + uuid)
      })
    },
    UpdateLinks: async function() {
      if(this.$route.params.id) {
        await axios.get('https://api.superawesome.ml/api/verify/' + this.$route.params.id, {
          headers: {
            "API-Key": `${localStorage.token}`
          }
        })
        .then(async(response) => {
          this.Linked = response.data
        })
        .catch(error => {
          
        })
      } else {
        await axios.get('https://api.superawesome.ml/api/verify/', {
          headers: {
            "API-Key": `${localStorage.token}`
          }
        })
        .then(async(response) => {
          this.Linked = response.data
        })
        .catch(error => {
          
        })
      }
    }
  }
}
</script>