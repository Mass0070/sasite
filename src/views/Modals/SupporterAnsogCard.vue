<template>
  <div>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="supporter-svar1"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="annuller()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[0] }}</p>
      <b-form-select
        :options="Soptions"
        v-model="Application.info.uuid"
        size="sm"
        class="mt-3"
        @change="Updatesvar()"
      ></b-form-select>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar2"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[1] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar2"
        :placeholder="Squestion.Supporter[1]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar3"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[2] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar3"
        :placeholder="Squestion.Supporter[2]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar4"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[3] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar4"
        :placeholder="Squestion.Supporter[3]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar5"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[4] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar5"
        :placeholder="Squestion.Supporter[4]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar6"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[5] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar6"
        :placeholder="Squestion.Supporter[5]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar7"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[6] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar7"
        :placeholder="Squestion.Supporter[6]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar8"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[7] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar8"
        :placeholder="Squestion.Supporter[7]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar9"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[8] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar9"
        :placeholder="Squestion.Supporter[8]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar10"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[9] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar10"
        :placeholder="Squestion.Supporter[9]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="supporter-svar11"
      ok-title="Næste"
      @ok="nextSvar()"
      @cancel="backSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Supporter[10] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar11"
        :placeholder="Squestion.Supporter[10]"
        rows="3"
        max-rows="6"
        @change="Updatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Supporter Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="supporter-afslutning"
      ok-title="Indsend"
      @ok="indsend()"
      @cancel="annuller()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <div id="about">
        <div v-if="Application.svar.svar1" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[0] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar1 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar2" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[1] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar2 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar3" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[2] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar3 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar4" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[3] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar4 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar5" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[4] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar5 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar6" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[5] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar6 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar7" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[6] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar7 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar8" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[7] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar8 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar9" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[8] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar9 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar10" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[9] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar10 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar11" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Supporter[10] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar11 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
      </div>
    </b-modal>
    <b-card
      title="Supporter"
      img-alt="Supporter"
      img-top
      tag="Supporter"
      style="
        max-width: 20rem;
        margin-bottom: 1%;
        background: #2f3136;
        color: wheat;
      "
      class="mb-2"
      align="center"
    >
      <b-card-text>
        Er du klar til at ansøge om supporter?
        <br />
        Når du er klar så tryk på "Ansøg om supporter". Er du blevet
        <span>afvist</span> skal du minimum vente 3 måneder.
        <br />
        <b-button
          cent
          @click="opretSupporter"
          variant="success"
          style="margin-top: 5%; font-family: 'DM Mono', monospace"
        >
          Ansøg om supporter
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
.my-4 {
  color: wheat;
  font-size: 25px;
  text-shadow: 4px 4px 0 #222;
  font-weight: 650;
  letter-spacing: 2px;
  text-transform: uppercase;
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
import { BButton, BFormTextarea } from "bootstrap-vue";
import SquestionARK from "./../../question";
export default {
  name: "Supporteransogcard",
  data() {
    return {
      Soptions: [],
      Application: {
        info: {},
        svar: {},
      },
      Squestion: SquestionARK,
      Scurrent: null,
    };
  },
  components: {
    BButton,
    BFormTextarea,
  },
  mounted() {
    this.$root.$on("bv::modal::show", async (bvEvent, modalId) => {
      this.current = modalId;
      await this.getSvar();
      if (modalId === "supporter-svar1") {
        this.UpdateLinks();
      }
    });
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
    getSvar: async function () {
      await axios
        .post("https://api.superawesome.ml/supporterapply/@meAlle", null, {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        })
        .then(async (response) => {
          if (response.data.length > 0) {
            let svar = {};
            let FindOne = response.data.find(
              (x) => x.info && x.info.status === "Igang"
            );
            if (!FindOne) {
              this.Application = { svar, info: {} };
              return;
            }
            this.Application = { svar, ...FindOne };
          }
        });
    },
    opretSupporter: async function () {
      await this.getSvar();
      if (this.Application && this.Application.info.status === "Igang") {
        this.$bvModal.show("supporter-svar1");
        return;
      }
      await axios
        .post("https://api.superawesome.ml/supporterapply/", null, {
          headers: { "API-Key": `${localStorage.token}` },
        })
        .then((response) => {
          if (response.data.success) {
            this.$bvModal.show("supporter-svar1");
          } else {
            this.alert(response.data.message, "error");
          }
        });
    },
    UpdateLinks: async function () {
      await axios
        .get("https://api.superawesome.ml/api/verify/", {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        })
        .then(async (response) => {
          let newdata = response.data.map((e) => {
            return {
              value: e.uuid,
              text: e.username,
              disabled: e.blacklist,
            };
          });
          let Unblacklist = newdata.find((x) => x.disabled === false);
          if (!this.Application.info.uuid) {
            if (Unblacklist) this.Application.info.uuid = Unblacklist.value;
            if (!Unblacklist) this.Application.info.uuid = newdata[0].value;
          }
          this.Soptions = newdata;
        });
    },
    Updatesvar: async function () {
      await axios.post(
        "https://api.superawesome.ml/supporterapply/" + this.Application._id,
        {
          [this.Application.info.uuid ? "uuid" : null]: this.Application.info
            .uuid,
          ...this.Application.svar,
        },
        { headers: { "API-Key": `${localStorage.token}` } }
      );
    },
    nextSvar: async function () {
      this.$bvModal.hide(this.current);
      if (this.current === "supporter-svar1") {
        this.Updatesvar();
        this.$bvModal.show("supporter-svar2");
      } else if (this.current === "supporter-svar2") {
        this.$bvModal.show("supporter-svar3");
      } else if (this.current === "supporter-svar3") {
        this.$bvModal.show("supporter-svar4");
      } else if (this.current === "supporter-svar4") {
        this.$bvModal.show("supporter-svar5");
      } else if (this.current === "supporter-svar5") {
        this.$bvModal.show("supporter-svar6");
      } else if (this.current === "supporter-svar6") {
        this.$bvModal.show("supporter-svar7");
      } else if (this.current === "supporter-svar7") {
        this.$bvModal.show("supporter-svar8");
      } else if (this.current === "supporter-svar8") {
        this.$bvModal.show("supporter-svar9");
      } else if (this.current === "supporter-svar9") {
        this.$bvModal.show("supporter-svar10");
      } else if (this.current === "supporter-svar10") {
        this.$bvModal.show("supporter-svar11");
      } else if (this.current === "supporter-svar11") {
        this.$bvModal.show("supporter-afslutning");
      }
    },
    backSvar: async function () {
      this.$bvModal.hide(this.current);
      if (this.current === "supporter-svar11") {
        this.$bvModal.show("supporter-svar10");
      } else if (this.current === "supporter-svar10") {
        this.$bvModal.show("supporter-svar9");
      } else if (this.current === "supporter-svar9") {
        this.$bvModal.show("supporter-svar8");
      } else if (this.current === "supporter-svar8") {
        this.$bvModal.show("supporter-svar7");
      } else if (this.current === "supporter-svar7") {
        this.$bvModal.show("supporter-svar6");
      } else if (this.current === "supporter-svar6") {
        this.$bvModal.show("supporter-svar5");
      } else if (this.current === "supporter-svar5") {
        this.$bvModal.show("supporter-svar4");
      } else if (this.current === "supporter-svar4") {
        this.$bvModal.show("supporter-svar3");
      } else if (this.current === "supporter-svar3") {
        this.$bvModal.show("supporter-svar2");
      } else if (this.current === "supporter-svar2") {
        this.$bvModal.show("supporter-svar1");
      }
    },
    indsend: async function () {
      await axios
        .post(
          "https://api.superawesome.ml/supporterapply/" +
            this.Application._id +
            "/indsend",
          null,
          { headers: { "API-Key": `${localStorage.token}` } }
        )
        .then((response) => {
          if (response.data.success) {
            this.alert("Du har indsendt din ansøgning", "success");
            this.Application = { svar: {}, info: {} };
          } else {
            this.alert(response.data.message, "error");
          }
        });
    },
    annuller: async function () {
      await axios
        .post(
          "https://api.superawesome.ml/supporterapply/" +
            this.Application._id +
            "/annuller",
          null,
          { headers: { "API-Key": `${localStorage.token}` } }
        )
        .then((response) => {
          if (response.data.success) {
            this.alert("Din ansøgning er blevet anulleret", "warning");
            this.Application = { svar: {}, info: {} };
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
