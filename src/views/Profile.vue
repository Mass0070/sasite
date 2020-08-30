<template>
  <div>
    <hr>
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
@media only screen and (min-width: 768px) {
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
}
</style>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      info: false
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
    .then(response => {
      switch(response.status) {
        case 200:
          break;
        case 401:
          this.info = "Ikke adgang"
          break;
        case 402:
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
    })  
    .catch((error) => {
      if(error.response) {
        switch(error.response.status) {
          case 200:
            break;
          case 401:
            this.info = "Ikke adgang"
            break;
          case 402:
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