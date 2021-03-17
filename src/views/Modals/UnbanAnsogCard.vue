<template>
  <div>
    <b-modal
      title="Unban Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="unban-svar1"
      ok-title="Næste"
      @ok="unextSvar()"
      @cancel="uannuller()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Unban[0] }}</p>
      <b-form-select
        :options="Soptions"
        v-model="Application.info.uuid"
        size="sm"
        class="mt-3"
        @change="uUpdatesvar()"
      ></b-form-select>
    </b-modal>
    <b-modal
      title="Unban Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="unban-svar2"
      ok-title="Næste"
      @ok="unextSvar()"
      @cancel="ubackSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Unban[1] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar2"
        :placeholder="Squestion.Unban[1]"
        rows="3"
        max-rows="6"
        @change="uUpdatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="unban-svar3"
      ok-title="Næste"
      @ok="unextSvar()"
      @cancel="ubackSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Unban[2] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar3"
        :placeholder="Squestion.Unban[2]"
        rows="3"
        max-rows="6"
        @change="uUpdatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="unban-svar4"
      ok-title="Næste"
      @ok="unextSvar()"
      @cancel="ubackSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Unban[3] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar4"
        :placeholder="Squestion.Unban[3]"
        rows="3"
        max-rows="6"
        @change="uUpdatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Tilbage"
      id="unban-svar5"
      ok-title="Næste"
      @ok="unextSvar()"
      @cancel="ubackSvar()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <p class="my-4">{{ Squestion.Unban[4] }}</p>
      <b-form-textarea
        id="textarea"
        v-model="Application.svar.svar5"
        :placeholder="Squestion.Unban[4]"
        rows="3"
        max-rows="6"
        @change="uUpdatesvar()"
      ></b-form-textarea>
    </b-modal>
    <b-modal
      title="Unban Ansøgning"
      title-class="text-primary"
      content-class="bg-dark"
      header-close-variant="primary"
      cancel-title="Annuller"
      id="unban-afslutning"
      ok-title="Indsend"
      @ok="uindsend()"
      @cancel="uannuller()"
      header-border-variant="dark"
      footer-border-variant="dark"
    >
      <div id="about">
        <div v-if="Application.svar.svar1" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Unban[0] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar1 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar2" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Unban[1] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar2 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar3" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Unban[2] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar3 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar4" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Unban[3] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar4 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
        <div v-if="Application.svar.svar5" class="Hover">
          <h3 class="ansøgnings-h3">{{ Squestion.Unban[4] }}</h3>
          <p class="ansøgnings-p">{{ Application.svar.svar5 }}</p>
        </div>
        <hr v-show="isMobile()" class="Split" />
      </div>
    </b-modal>
    <b-card
      title="Unban"
      img-alt="Unban"
      img-top
      tag="Unban"
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
        Er du klar til at ansøge om unban?
        <br />
        Når du er klar så tryk på "Ansøg om unban". Er du blevet
        <span>afvist</span> har du ikke en chance længere.
        <br />
        <b-button
          cent
          @click="opretUnbanModal"
          variant="success"
          style="margin-top: 5%; font-family: 'DM Mono', monospace"
        >
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
  name: "Unbanansogcard",
  data() {
    return {
      Soptions: [],
      Application: {
        info: {},
        svar: {},
      },
      Squestion: SquestionARK,
    };
  },
  components: {
    BButton,
    BFormTextarea,
  },
  sockets: {
    tidUdløb: function () {
      this.$bvModal.hide(this.current);
      this.ualert("Din tid på ansøgning er udløbet", "warning");
    },
    newanswer: function () {
      this.getUnbanSvar();
    },
    annuller: function () {
      this.ualert("Din ansøgning er blevet anulleret", "warning");
    },
    indsend: function () {
      this.ualert("Din ansøgning er blevet indsendt", "success");
    },
  },
  mounted() {
    this.$root.$on("bv::modal::show", async (bvEvent, modalId) => {
      if(modalId.startsWith("unban")) {
        this.current = modalId;
        await this.getUnbanSvar();
        if (modalId === "unban-svar1") {
          await this.uUpdateAccs();
          await this.uUpdateLinks()
        }
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
    opretUnbanModal: async function() {
      await this.getUnbanSvar();
      if (this.Application && this.Application.info.status === "Igang") {
        this.$bvModal.show("unban-svar1");
        return;
      }
      await this.uUpdateAccs();
      let newmap = { }
      this.Soptions.forEach(x => {
        newmap[x.value] = x.text
      })
      let response = await this.$swal({
        title: 'Opret en unban ansøgning',
        input: 'select',
        inputOptions: newmap,
        inputPlaceholder: 'Ingame-navn?',
        showCancelButton: true
      })
      if(response.isConfirmed) {
        this.Application.info.uuid = response.value
        await this.opretUnban({ uuid: response.value })
      }
    },
    uUpdateAccs: async function () {
      await axios
        .get("https://api.superawesome.ml/api/verify/", {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        })
        .then(async (response) => {
          let newdata = await response.data.map((e) => {
            return {
              value: e.uuid,
              text: e.username,
              disabled: e.blacklist,
            };
          });
          this.Soptions = newdata;
        });
    },
    getUnbanSvar: async function () {
      await axios
        .post("https://api.superawesome.ml/apply/@meAlle", null, {
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
    uUpdateLinks: async function () {
      let Unblacklist = await this.Soptions.find((x) => x.disabled === false);
      if (!this.Application.info.uuid) {
        if (Unblacklist) this.Application.info.uuid = Unblacklist.value;
        if (!Unblacklist) this.Application.info.uuid = this.Soptions[0].value;
      } 
    },
    opretUnban: async function (data) {
      await this.getUnbanSvar();
      if (this.Application && this.Application.info.status === "Igang") {
        this.$bvModal.show("unban-svar1");
        return;
      }
      await axios
        .post("https://api.superawesome.ml/apply/", data, {
          headers: { "API-Key": `${localStorage.token}` },
        })
        .then(async(response) => {
          if (response.data.success) {
            this.$bvModal.show("unban-svar1");
          } else {
            this.ualert(response.data.message, "error");
          }
        });
    },
    uUpdatesvar: async function () {
      await axios.post(
        "https://api.superawesome.ml/apply/" + this.Application._id,
        {
          [this.Application.info.uuid ? "uuid" : null]: this.Application.info
            .uuid,
          ...this.Application.svar,
        },
        { headers: { "API-Key": `${localStorage.token}` } }
      ).then(response => {
        if(!response.data.success) {
          this.$bvModal.hide(this.current);
          this.ualert(response.data.message, "error")
        }
      })
    },
    unextSvar: async function () {
      this.$bvModal.hide(this.current);
      if (this.current === "unban-svar1") {
        await this.uUpdatesvar();
      } else if (this.current === "unban-svar5") {
        setTimeout(() => {
          this.$bvModal.show("unban-afslutning");
        }, 500);
        return;
      }
      this.$bvModal.show("unban-svar" + (parseFloat(this.current.replace("unban-svar", "")) + 1));
    },
    ubackSvar: async function () {
      this.$bvModal.hide(this.current);
      this.$bvModal.show("unban-svar" + (parseFloat(this.current.replace("unban-svar", "")) - 1));
    },
    uindsend: async function () {
      await axios
        .post(
          "https://api.superawesome.ml/apply/" +
            this.Application._id +
            "/indsend",
          null,
          { headers: { "API-Key": `${localStorage.token}` } }
        )
        .then((response) => {
          if (response.data.success) {
            this.ualert("Du har indsendt din ansøgning", "success");
            this.Application = { svar: {}, info: {} };
          } else {
            this.ualert(response.data.message, "error");
          }
        });
    },
    uannuller: async function () {
      await axios
        .post(
          "https://api.superawesome.ml/apply/" +
            this.Application._id +
            "/annuller",
          null,
          { headers: { "API-Key": `${localStorage.token}` } }
        )
        .then((response) => {
          if (response.data.success) {
            this.ualert("Din ansøgning er blevet anulleret", "warning");
            this.Application = { svar: {}, info: {} };
          } else {
            this.ualert(response.data.message, "error");
          }
        });
    },
    ualert: function (message, icon) {
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
