<template>
  <div>
    <hr class="Bar" />
    <div id="about" v-if="info.svar1">
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q1 }}</h3>
        <p class="ansøgnings-p">{{ info.svar1 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q2 }}</h3>
        <p class="ansøgnings-p">{{ info.svar2 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q3 }}</h3>
        <p class="ansøgnings-p">{{ info.svar3 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q4 }}</h3>
        <p class="ansøgnings-p">{{ info.svar4 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div class="Hover">
        <h3 class="ansøgnings-h3">{{ question.q5 }}</h3>
        <p class="ansøgnings-p-sidst">{{ info.svar5 }}</p>
      </div>
    </div>
    <div
      v-else-if="info === 'Ikke login' || info === 'Not authorized'"
      id="Notloggedin"
    >
      <div id="Notloggedindiv">
        <h1 class="Notloggedindiv-span">Du er <span>ikke</span> logget ind.</h1>
        <p class="Logind">
          Tryk
          <a
            href="https://discord.com/oauth2/authorize?client_id=694582426474774570&redirect_uri=http%3A%2F%2Fsuperawesome.ml%2Fauth%2F&response_type=token&scope=identify"
            >her</a
          >
          for at login.
        </p>
      </div>
    </div>
    <div v-else-if="info === 'Ikke fundet'" id="Notloggedin">
      <div id="Notloggedindiv">
        <h1 class="Notloggedindiv-span">
          Kunne <span>ikke</span> finde en profile med dette id
        </h1>
        <p class="AndetID">Prøv et andet id.</p>
      </div>
    </div>
    <div v-else-if="info === 'Ikke adgang'" id="Notloggedin">
      <div id="Notloggedindiv">
        <h1>Du har ikke adgang til at se den ansøgning.</h1>
        <p>
          Bliv staff for at kunne se denne ansøgning ellers kig på din egen
          istedet
        </p>
      </div>
    </div>
    <div v-else-if="Object.keys(info).length !== 0" id="Notloggedin">
      <div class="Notloggedindiv-span">
        <h1>{{ info }}</h1>
      </div>
    </div>
  </div>
</template>

<style>
#Notloggedin {
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  background-color: #2f2f2f;
  border: 2px solid crimson;
  border-radius: 30px;
  text-align: center;
  width: 70%;
  margin-top: 10%;
}
.Notloggedindiv-span {
  color: #e6e6e6;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 40px;
}
.Notloggedindiv-span span {
  color: crimson;
}
.AndetID {
  color: #d3d3d3;
  margin-bottom: 40px;
}
.Split {
  height: 1px;
  margin-top: 15%;
  background: linear-gradient(to right, blue, green);
  border: none;
}
.Hover {
  font-family: arial;
  margin-top: 2em;
}
.Hover:hover {
  opacity: 0.8;
}
#about {
  margin: 0 auto;
  margin-top: 6%;
  background-color: #212529;
  border: 3px solid #1f5bbb;
  border-radius: 30px;
  padding: 2%;
  padding-right: 2%;
  padding-left: 2%;
  width: 90%;
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
  margin-top: 0.5em;
  font-family: "Lucida Console", Courier, monospace;
  margin: auto;
}
.ansøgnings-p-sidst {
  color: #34a206;
  font-size: 85%;
  text-align: center;
  font-family: "Lucida Console", Courier, monospace;
  width: 70%;
  margin-top: 0.5em;
  margin-left: 15%;
  margin-bottom: 3%;
}
@media only screen and (min-width: 930px) {
  /* For desktop: */
  #about {
    width: 85%;
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
    margin-top: 0.5em;
    font-family: "Lucida Console", Courier, monospace;
  }
  .ansøgnings-p-sidst {
    color: #34a206;
    font-size: 85%;
    text-align: center;
    margin-top: 2%;
    font-family: "Lucida Console", Courier, monospace;
    width: 70%;
    margin-top: 0.5em;
    margin-left: 15%;
  }
}
</style>

<script>
import axios from "axios";
import questionARK from "../question";
export default {
  async created() {
    if (localStorage.token) {
      await axios
        .get("https://api.superawesome.ml/api/apply/" + this.$route.params.id, {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        })
        .then((response) => {
          switch (response.status) {
            case 200:
              break;
            case 401:
              this.info = "Ikke adgang";
              break;
            case 402:
              this.info = "Ikke fundet";
              break;
            case 403:
              this.info = "Not authorized";
              break;
            case 500:
              this.info = "Fejl, kontakt venlist staffs.";
              break;
          }
          if (!this.info) {
            this.info = response.data;
          }
          this.question = questionARK;
        })
        .catch((error) => {
          if (error.response) {
            switch (error.response.status) {
              case 200:
                break;
              case 401:
                this.info = "Ikke adgang";
                break;
              case 402:
                this.info = "Ikke fundet";
                break;
              case 403:
                this.info = "Not authorized";
                break;
              case 500:
                this.info = "Fejl, kontakt venlist staffs.";
                break;
            }
          }
          if (!this.info) {
            this.info =
              "Fejl, kontakt venlist staffs. Skriv fejlkoden 416 til dem";
          }
        });
    } else {
      this.info = "Ikke login";
    }
  },
  data() {
    return {
      info: false,
      question: {},
    };
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
