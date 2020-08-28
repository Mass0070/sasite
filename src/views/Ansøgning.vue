<template>
  <div>
    <hr>
    <div id="about" v-if="info.svar1">
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q1 }}</h3>
        <p class="ansøgnings-p">{{ info.svar1 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split">
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q2 }}</h3>
        <p class="ansøgnings-p">{{ info.svar2 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split">
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q3 }}</h3>
        <p class="ansøgnings-p">{{ info.svar3 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split">
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q4 }}</h3>
        <p class="ansøgnings-p">{{ info.svar4 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split">
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q5 }}</h3>
        <p class="ansøgnings-p-sidst">{{ info.svar5 }}</p>
      </div>
    </div>
    <div v-else-if="info=== 'Ikke login' || info === 'Not authorized'" id="Notloggedin"> 
      <div id="Notloggedindiv">
        <h1 class="Notloggedindiv-span">Du er <span>ikke</span> logget ind.</h1>
        <p class="Logind">Tryk <a href="https://discord.com/oauth2/authorize?client_id=694582426474774570&redirect_uri=http%3A%2F%2Fsuperawesome.ml%2Fauth%2F&response_type=token&scope=identify">her</a> for at login.</p>
      </div>
    </div>
    <div v-else-if="info=== 'Ikke adgang'" id="Notloggedin"> 
      <div id="Notloggedindiv">
        <h1>Du har ikke adgang til at se den ansøgning.</h1>
        <p>Bliv staff for at kunne se den ansøgning eller kigge på din egen istedet</p>
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
.Split {
  height: 1px;
  margin-top: 15%;
  background: linear-gradient(to right, blue, green);
  border: none;
}
hr {
  height: 1px;
  background: linear-gradient(to right, blue, green);
  border: none;
}
.hover {
  font-family: arial;
}
#Notloggedindiv {
  margin: auto;
  text-align: center;
  color: #e6e6e6;
}
.Hover:hover {
  opacity: 0.8
} 
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
#about {
  margin: 0 auto;
  margin-top: 6%;
  background-color: #2f2f2f;
  border: 3px solid #1f5bbb;
  border-radius: 30px;
  width: 75%;
  padding: 2%;
  padding-right: 5%;
  padding-left: 5%;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
.ansøgnings-h3 {
    color: #3a56e2;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    margin-top: 15%;
}
.ansøgnings-p {
    color: #34a206;
    font-size: 85%;
    text-align: center;
    margin-top: 5%;
    font-family: "Lucida Console", Courier, monospace;
    width: 70%;
    margin-left: 15%;
}
.ansøgnings-p-sidst {
    color: #34a206;
    font-size: 85%;
    text-align: center;
    font-family: "Lucida Console", Courier, monospace;
    width: 70%;
    margin-top: 5%;
    margin-left: 15%;
    margin-bottom: 15%;
}
.Logind {
    padding-top: 3px;
    color: #d3d3d3;
}
.Notloggedindiv-span span {
  color: crimson;
}
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .Split {
    height: 1px;
    margin-top: 15%;
    background: linear-gradient(to right, blue, green);
    border: none;
  }
  hr {
    height: 1px;
    background: linear-gradient(to right, blue, green);
    border: none;
  }
  .hover {
    font-family: arial;
  }
  #Notloggedindiv {
    margin: auto;
    text-align: center;
    color: #e6e6e6;
  }
  .Hover:hover {
    opacity: 0.8
  } 
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
  #about {
    top: 50%;
    left: 50%;
    display: grid;
    border-radius: 30px;
    width: 65%;
    grid-auto-rows: minmax(250px,auto);
    margin-bottom: 5%;
  }
  .ansøgnings-h3 {
      color: #3a56e2;
      font-family: "Times New Roman", Times, serif;
      text-align: center;
      margin-top: 3%;
  }
  .ansøgnings-p {
      color: #34a206;
      font-size: 85%;
      text-align: center;
      margin-top: 5%;
      font-family: "Lucida Console", Courier, monospace;
      width: 70%;
      margin-left: 15%;
  }
  .ansøgnings-p-sidst {
      color: #34a206;
      font-size: 85%;
      text-align: center;
      margin-top: 2%;
      font-family: "Lucida Console", Courier, monospace;
      width: 70%;
      margin-top: 5%;
      margin-left: 15%;
  }
  .Logind {
      padding-top: 3px;
      color: #d3d3d3;
  }
  .Notloggedindiv-span span {
    color: crimson;
  }
}
</style>

<script>
import axios from 'axios'
import questionARK from '../question'
export default {
  async created() {
    if(localStorage.token) {
      await axios
      .get('https://api.superawesome.ml/api/apply/' + this.$route.params.id,
        {
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
        this.question = questionARK
      })
      .catch((error) => {
        if(error.response) {
          switch(error.response.status) {
            case 200:
              break;
            case 401:
              this.info = "Ikke adgang"
              break;
            case 403:
              this.info = "Not authorized"
              break;
            case 500:
              this.info = "Fejl, kontakt venlist staffs."
              break;
          }
        }
        if(!this.info) {
          this.info = "Fejl, kontakt venlist staffs. Skriv fejlkoden 416 til dem"
        }
      })
    } else {
      this.info = "Ikke login"
    }
  },
  data () {
    return {
      info: false,
      question: {}
    }
  }, 
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>