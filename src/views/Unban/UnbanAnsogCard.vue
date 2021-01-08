<template>
  <div>
    <b-modal
      title="Unban Ansøgning 1"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="svar1"
      ok-title="Næste"
      @ok="addSvar('svar1', ansøgning.uuid)"
      @cancel="annuller()"
    >
      <b-form-select
        :options="options"
        v-model="ansøgning.uuid"
        size="sm"
        class="mt-3"
      ></b-form-select>
    </b-modal>
    <b-modal
      title="Unban Ansøgning 2"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="svar2"
      ok-title="Næste"
      @ok="addSvar('svar2', ansøgning.svar2)"
      @cancel="annuller()"
    >
      <b-form-select
        :options="options2"
        v-model="ansøgning.svar2"
        size="sm"
        class="mt-3"
      ></b-form-select>
    </b-modal>
    <b-modal
      title="Unban Ansøgning 3"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="svar3"
      ok-title="Næste"
      @ok="addSvar('svar3', ansøgning.svar3)"
      @cancel="annuller()"
    >
      <b-form-textarea
        id="textarea"
        v-model="ansøgning.svar3"
        placeholder="3. Ban grund?"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning 4"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="svar4"
      ok-title="Næste"
      @ok="addSvar('svar4', ansøgning.svar4)"
      @cancel="annuller()"
    >
      <b-form-textarea
        id="textarea"
        v-model="ansøgning.svar4"
        placeholder="4. Hvorfor skal vi unbanne dig?"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning 4"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="svar5"
      ok-title="Næste"
      @ok="addSvar('svar5', ansøgning.svar5)"
      @cancel="annuller()"
    >
      <b-form-textarea
        id="textarea"
        v-model="ansøgning.svar5"
        placeholder="5. Kontakter du staff omkring din appeal, vil den blive afvist, OK?"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning 5"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="svar6"
      ok-title="Indsend"
      @ok="indsend()"
      @cancel="annuller()"
    >
      <div id="about">
        <div class="Hover">
          <h3 class="ansøgnings-h3">{{ question.q1 }}</h3>
          <p class="ansøgnings-p">{{ ansøgning.svar1 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div class="Hover">
          <h3 class="ansøgnings-h3">{{ question.q2 }}</h3>
          <p class="ansøgnings-p">{{ ansøgning.svar2 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div class="Hover">
          <h3 class="ansøgnings-h3">{{ question.q3 }}</h3>
          <p class="ansøgnings-p">{{ ansøgning.svar3 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div class="Hover">
          <h3 class="ansøgnings-h3">{{ question.q4 }}</h3>
          <p class="ansøgnings-p">{{ ansøgning.svar4 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div class="Hover">
          <h3 class="ansøgnings-h3">{{ question.q5 }}</h3>
          <p class="ansøgnings-p-sidst">{{ ansøgning.svar5 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
      </div>
    </b-modal>
    <b-card
      title="Unban"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Unban"
      img-top
      tag="Unban"
      style="
        max-width: 20rem;
        margin-bottom: 1%;
      "
      class="mb-2"
      align="center"
    >
      <b-card-text>
        Er du klar til at ansøge om unban?
        <br />
        Når du er klar så tryk på "Ansøg om unban".
        Er du blevet <span>afvist</span> har du ikke en chance længere.
        <br />
        <b-button cent @click="opretUnban" variant="success">
          Ansøg om unban
        </b-button>
      </b-card-text>
    </b-card>
  </div>
</template>

<style>
.Hover {
  font-family: arial;
  margin-top: 2em;
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
import { BButton, BFormTextarea } from "bootstrap-vue";
import questionARK from "./../../question";
export default {
  name: "UnbanAnsogCard",
  data() {
    return {
      options: [ ],
      options2: [ ],
      ansøgning: { },
      question: {}
    };
  },
  components: {
    BButton,
    BFormTextarea
  },
  sockets: {
    tidUdløb: function () {
      this.alert("Din ansøgning er blevet anulleret", "warning")
      this.$bvModal.hide()
    },
    newanswer: function () {
      this.getSvar()
      this.show()
    },
    annuller: function () {
      this.alert("Din ansøgning er blevet anulleret", "warning")
    },
    indsend: function () {
      this.alert("Din ansøgning er blevet indsendt", "success")
    }
  },
  mounted() {
    this.$root.$on('bv::modal::show', async (bvEvent, modalId) => {
      await this.getSvar()
      if(modalId === "svar1") {
        this.UpdateLinks()
      }
      if(modalId === "svar2") {
        this.getSvar2()
      }
      if(modalId === "svar6") {
        this.question = questionARK;
      }
    })
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
    show: async function () {
      await axios
        .post("https://api.superawesome.ml/api/apply/@me", null, {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        }
      ).then(async (response) => {
        if(response.data.svar1 && response.data.svar2 && response.data.svar3 && response.data.svar4 && response.data.svar5) {
          this.$bvModal.show("svar6")
        } else if(response.data.svar1 && response.data.svar2 && response.data.svar3 && response.data.svar4) {
          this.$bvModal.show("svar5")
        } else if(response.data.svar1 && response.data.svar2 && response.data.svar3) {
          this.$bvModal.show("svar4")
        } else if(response.data.svar1 && response.data.svar2) {
          this.$bvModal.show("svar3")
        } else if(response.data.svar1) {
          this.$bvModal.show("svar2")
        } else {
          this.$bvModal.show("svar1")
        }
      })
    },
    getSvar: async function () {
      await axios
        .post("https://api.superawesome.ml/api/apply/@me", null, {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        }
      )
      .then(async (response) => {
        this.ansøgning = response.data
        response.data
      })
    },
    UpdateLinks: async function () {
      await axios
        .get(
          "https://api.superawesome.ml/api/verify/",
          {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          }
        )
        .then(async (response) => {
          let newdata = response.data.map((e) => {
            return {
              value: e.uuid,
              text: e.username,
              disabled: e.blacklist
            }
          })
          newdata.push({ value: null, text: "Ingame-navn?" })
          this.options = newdata
        });
    },
    addSvar: async function (svar, response) {
      let data = {
        [svar]: response,
      }
      console.log(data)
      await axios
        .put(
          "https://api.superawesome.ml/api/apply/" + this.ansøgning.UnbanId,
          data,
          {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          },
        )
        .then(response => {
          if(response.data.message === "Svar1 done" || response.data.message === "Svar2 done" || response.data.message === "Svar3 done" || response.data.message === "Svar4 done" || response.data.message === "Svar5 done") {
            return this.show();
          }
          if(svar) {
            this.alert(response.data.message, "error")
          }
        })
    },
    opretUnban: async function () {
      await axios
        .post(
          "https://api.superawesome.ml/api/apply/",
          null,
          {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          },
        )
        .then(async (response) => {
          if(response.data.message === "Ansøgning er ikke åben.") {
            this.alert("Ansøgning er ikke åben.", "error")
          } else if (response.data.message === "Igang") {
            this.getSvar()
            this.show()
          } else if (response.data.message === "Sendt") {
            this.alert("Du har allerede sendt en ansøgning.", "error")
          } else if (response.data.message === "Oprettet") {
            this.alert("Du har startet din ansøgning.", "success")
          } else {
            console.log(response.data.message)
          }
        })
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
      }).then(result => {
        if(result.isConfirmed && message === "Du har startet din ansøgning.") {
          this.show()
        }
      });
    },
    getSvar2: async function() {
      console.log(this.ansøgning.uuid)
      await axios
        .get(
          "https://api.ashcon.app/mojang/v2/user/" + this.ansøgning.uuid,
        )
        .then(async (response) => {
          console.log(response.data)
          let newdata = response.data.username_history.map((e) => {
            return {
              value: e.username,
              text: e.username
            }
          })
          newdata.push({ value: null, text: "2. Dit ingame navn, da du blev banned?" })
          this.options2 = newdata
        });
    },
    indsend: async function() {
      await axios
        .post(
          "https://api.superawesome.ml/api/apply/indsend",
          null,
          {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          }
        ).then(async(response) => {
          if(response.data.message === "Need answer on") {
            this.alert("Mangler svar på " + response.data.needsvar.toString(), "error")
          }
        })
    },
    annuller: async function() {
      await axios
        .post(
          "https://api.superawesome.ml/api/apply/annuller",
          null,
          {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          }
        ).then(async(response) => {
          if(response.data.message === "Not found") {
            this.alert("Kunne ikke finde din ansøgning", "error")
          }
        })
    }
  },
};
</script>
