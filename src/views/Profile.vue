<template>
  <div>
    <hr />
    <div style="display: inline-flex; padding-top: 1%; padding-bottom: 1%">
      <div v-show="username" class="Discord-Boks">
        <a class="Discord-Profil">
          <img
            v-show="finaleUrl"
            v-bind:src="finaleUrl"
            alt="Billede"
            width="128"
            height="128"
          />
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
        <b-img
          :id="x.username"
          v-bind:src="'https://minotar.net/avatar/' + x.uuid"
          fluid
          :alt="x.username"
          width="100"
          height="100"
        ></b-img>
        <b-popover
          :target="x.username"
          triggers="hover"
          :title="x.username"
          placement="bottom"
        >
          <template v-slot-content v-if="!$route.params.id">
            <b-button pill @click="sletprofile(x.uuid)" variant="danger"
              >Slet kontoen</b-button
            >
          </template>
        </b-popover>
      </div>
      <div class="Button-Plus-Div" v-if="!$route.params.id">
        <b-button variant="success">
          <b-icon-plus
            v-b-modal="'Plus'"
            aria-label="Help"
            class="Button-Plus-Icon"
          ></b-icon-plus>
          <b-modal
            title="Verification"
            title-class="text-primary"
            content-class="bg-dark"
            header-close-variant="primary"
            cancel-title="Annuller"
            @ok="Add"
            @hide="code = ''"
            id="Plus"
            header-border-variant="dark"
            footer-border-variant="dark"
          >
            <b-form-input
              v-model="code"
              id="Number"
              type="number"
              placeholder="Indtast koden"
            ></b-form-input>
          </b-modal>
        </b-button>
      </div>
    </div>
    <div>
      <b-form-checkbox
        v-model="view"
        name="check-button"
        switch
        @change="Change"
        class="Change"
      >
        Switch Checkbox <b>(Checked: {{ checked }})</b>
      </b-form-checkbox>
    </div>
    <div v-if="Array.isArray(info) && info.length > 0" class="Grid">
      <div
        v-for="x in info"
        class="Unban"
        :key="x.id"
        @click="
          $router.push({
            name: x.UnbanId ? 'Ansøgning' : 'Supporter',
            params: { id: x.UnbanId ? x.UnbanId : x._id },
          })
        "
      >
        <p class="UnbanId">
          <a> <span>ID:</span> {{ x.UnbanId ? x.UnbanId : x._id }} </a>
        </p>
        <p class="P-Status">
          Status:<br /><span
            class="P-Status-afvis"
            v-if="x.status ? x.status : x.info.status === 'Afvist'"
            >{{ x.status ? x.status : x.info.status }}</span
          ><span
            class="P-Status-accepteret"
            v-else-if="x.status ? x.status : x.info.status === 'Accepteret'"
            >{{ x.status ? x.status : x.info.status }}</span
          ><span v-else>{{ x.status ? x.status : x.info.status }}</span>
        </p>
        <p class="P-Oprettet">
          Oprettet:<br /><span>{{ getTime(x.createdAt) }}</span>
        </p>
        <p class="P-Opdateret">
          Seneste opdateret:<br /><span>{{ getTime(x.updatedAt) }}</span>
        </p>
      </div>
    </div>
    <div
      v-else-if="info === 'Ikke login' || info === 'Not authorized'"
      id="Notloggedin"
    >
      <div class="Notloggedindiv2">
        <h1 class="Notloggedindiv-span">Du er <span>ikke</span> logget ind.</h1>
        <p class="Logind">
          Tryk
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=694582426474774570&redirect_uri=https%3A%2F%2Fapi.superawesome.ml%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email"
            >her</a
          >
          for at login.
        </p>
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
  transform: translate(-50%, -50%);
  display: grid;
  background-color: #1f1e1e;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(250px, auto);
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

.Change {
  margin-top: 5%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
}

.Unban {
  border-radius: 30px;
  text-align: center;
  transition: 0.7s;
  border: 4px solid #1f5bbb;
  background-color: #212529;
  width: 20em;
  height: 20em;
}
.Unban:hover {
  box-shadow: -4px 4px 15px rgba(0, 107, 214, 0.5),
    4px -4px 15px rgba(0, 231, 169, 0.5);
  transition: 0.7s;
  line-height: normal;
  transform: scale(0.9);
  transition: 0.7s;
}
.Grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 15px;
}

.UnbanId {
  color: lightgrey;
  margin-top: 1em;
}
.UnbanId span {
  color: #04ef04;
}

.P-Status {
  margin-top: 1em;
}
.P-Status-accepteret {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
.P-Status-afvis {
  color: crimson;
  font-family: "Times New Roman", Times, serif;
}

.P-Oprettet {
  margin-top: 1em;
}
.P-Oprettet span {
  color: #04ef04;
}
.P-Opdateret {
  margin-top: 1em;
}
.P-Opdateret span {
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
  font-family: "DM Mono", monospace;
  color: white;
  margin-left: 1em;
}
.Discord-Navn span {
  color: crimson;
}
.LinkedKontoer {
  position: absolute;
  font-size: 120%;
  font-family: "DM Mono", monospace;
  color: white;
  padding-top: 5px;
}
.LinkedKontoer span {
  color: crimson;
}
</style>

<script>
import axios from "axios";
import dayjs from "dayjs";
import { BPopover, BButton, BIconPlus } from "bootstrap-vue";
export default {
  data() {
    return {
      info: false,
      username: false,
      userid: false,
      finaleUrl: false,
      Linked: false,
      code: "",
      checked: false,
    };
  },
  components: {
    BPopover,
    BButton,
    BIconPlus,
  },
  async created() {
    this.UpdateLinks();
  },
  methods: {
    getProfile: function () {
      console.log("Work in progress!");
    },
    getApplications: async function (type) {
      let link;
      if (type === "supporter")
        link = "http://localhost:4040/supporterapply/@meAlle";
      else link = "http://localhost:4040/api/apply/@meAlle";
      await axios
        .get(link, {
          headers: { "API-Key": `${localStorage.token}` },
          data: {
            [(await this.$route.params.id)
              ? await this.$route.params.id
              : null]: await this.$route.params.id,
          },
        })
        .then((response) => {
          this.info = response.data;
        });
    },
    Change: function (checked) {
      this.info = [];
      if (checked) {
        this.getApplications("supporter");
      } else {
        this.getApplications("unban");
      }
    },
    getTime: function (time) {
      return dayjs(time).locale("da").format("D MMMM YYYY HH:MM");
    },
    Add: function () {
      axios.post(
        "https://api.superawesome.ml/api/verify/" + this.code,
        {},
        {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        }
      );
      this.UpdateLinks();
      this.code = "";
    },
    sletprofile: async function (uuid) {
      await axios
        .delete("https://api.superawesome.ml/api/verify/" + uuid, {
          headers: {
            "API-Key": `${localStorage.token}`,
          },
        })
        .then(async (response) => {
          if (response.data.success) return console.log("Slettet " + uuid);
          console.log("Ikke slettet");
        })
        .catch(() => {
          console.log("Error " + uuid);
        });
      this.UpdateLinks();
    },
    UpdateLinks: async function () {
      if (this.$route.params.id) {
        await axios
          .get(
            "https://api.superawesome.ml/api/verify/" + this.$route.params.id,
            {
              headers: {
                "API-Key": `${localStorage.token}`,
              },
            }
          )
          .then(async (response) => {
            this.Linked = response.data;
          })
          .catch(() => {});
      } else {
        await axios
          .get("https://api.superawesome.ml/api/verify/", {
            headers: {
              "API-Key": `${localStorage.token}`,
            },
          })
          .then(async (response) => {
            this.Linked = response.data;
          })
          .catch(() => {});
      }
    },
  },
  sockets: {
    link() {
      this.UpdateLinks();
    },
    unlink() {
      this.UpdateLinks();
    },
  },
};
</script>
