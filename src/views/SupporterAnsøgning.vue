<template>
  <div>
    <hr class="Bar" />
    <div id="about" v-if="info.svar">
      <div v-if="info.svar.svar1" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[0] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar1 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar2" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[1] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar2 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar3" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[2] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar3 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar4" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[3] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar4 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar5" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[4] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar5 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar6" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[5] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar6 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar7" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[6] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar7 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar8" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[7] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar8 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar9" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[8] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar9 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar10" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[9] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar10 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.svar.svar11" class="Hover">
        <h3 class="ansøgnings-h3">{{ question.Supporter[10] }}</h3>
        <p class="ansøgnings-p">{{ info.svar.svar11 }}</p>
      </div>
      <hr v-show="isMobile()" class="Split" />
      <div v-if="info.staff && info.info.status === `Sendt`">
        <b-button @click="Afvis" variant="danger">Afvis</b-button>
        <b-button @click="Accept" variant="success">Accept</b-button>
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
  word-wrap: break-word;
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
  word-wrap: break-word;
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
    word-wrap: break-word;
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
    word-wrap: break-word;
  }
}
</style>

<script>
import axios from "axios";
import questionARK from "../question";
import { BButton } from "bootstrap-vue";
export default {
  async created() {
    if (localStorage.token) {
      await axios
        .get(
          "https://api.superawesome.ml/supporterapply/" + this.$route.params.id,
          {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          }
        )
        .then((response) => {
          if (!this.info) {
            this.info = response.data;
          }
          this.question = questionARK;
        })
        .catch(() => {});
    } else {
      this.info = "Ikke login";
    }
  },
  components: {
    BButton,
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
    async Accept() {
      await axios
        .post(
          "https://api.superawesome.ml/supporterapply/" +
            this.info._id +
            "/accept",
          null,
          { headers: { "API-Key": `${localStorage.token}` } }
        )
        .then((response) => {
          if (response.data.success) {
            this.alert("Du har accepteret ansøgningen.", "success");
            this.info.info.status === "Accepteret"
          } else {
            this.alert(response.data.message, "error");
          }
        });
    },
    async Afvis() {
      await axios
        .post(
          "https://api.superawesome.ml/supporterapply/" +
            this.info._id +
            "/afvis",
          null,
          { headers: { "API-Key": `${localStorage.token}` } }
        )
        .then((response) => {
          if (response.data.success) {
            this.alert("Du har afvist ansøgningen.", "success");
            this.info.info.status === "Afvist"
          } else {
            this.alert(response.data.message, "error");
          }
        });
    },
    alert: function (message, icon) {
      const Toast = this.$swal.mixin({
        showConfirmButton: true,
        timer: 15000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: icon,
        title: message,
      });
    },
  },
};
</script>
