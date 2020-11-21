<template>
  <div>
    <b-card
      title="Unban"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="
        max-width: 20rem;
        margin-top: 1%;
        margin-bottom: 1%;
        margin-left: 1%;
      "
      class="mb-2"
    >
      <b-card-text>
        Når du ansøger om unban på webbrowseren vil du får svar på din email du
        har tilknyttet til din discord.
        <br />
        Du har kun en chance for at få unban, hvis du bliver
        <span>afvist</span> har du ikke en chance længere.
        <b-button @click="ansøg = !ansøg" variant="success">
          <b-modal
            title="Unban Ansøgning"
            title-class="text-primary"
            content-class="bg-dark"
            header-close-variant="primary"
            cancel-title="Annuller"
            v-model="ansøg"
          >
            <b-form-select
              :options="options"
              v-model="selected"
              size="sm"
              class="mt-3"
            ></b-form-select>
          </b-modal>
        </b-button>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import { BButton } from "bootstrap-vue";
import Axios from "axios";

export default {
  name: "ansøg",
  data() {
    return {
      ansøg: false,
      selected: null,
      options: [
        { value: null, text: "Ingame-navn?" },
      ],
    };
  },
  components: {
    BButton,
  },
  sockets: {
    tidUdløb: function() {
      this.ansøg = false;
    }
  }, 
  methods() {
    updateOptions: function() {
      let accounts = []
      await Axios
            .get(
              "https://api.superawesome.ml/api/verify/",
              {
                headers: {
                  "API-Key": `${localStorage.token}`,
                },
              }
            )
            .then(async (response) => {
              accounts = response.data;
            })
            .catch(() => {});
      console.log(accounts)
      for(var e of accounts) {
        var returnvalue = {};
        returnvalue["value"] = e.uuid
        returnvalue["text"] = e.username
        this.options.push(returnvalue)
      }
      return;
    },
    checkanswer: function() {
      return;
    }
  },
  async created() {
    this.updateOptions()
  },
  mounted() {
    this.$root.$on('shown', (bvEvent, modalId) => {
      this.checkanswer
    })
  }
};
</script>
