<template>
    <div>
        <b-modal
            title="Unban Ansøgning"
            v-model="ansog"
            title-class="text-primary"
            content-class="bg-dark"
            header-close-variant="primary"
            cancel-title="Annuller"
        >
            <b-form-select
            :options="options"
            v-model="selected"
            size="sm"
            class="mt-3"
            ></b-form-select>
        </b-modal>
        <b-card
        title="Unban"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; margin-top: 1%; margin-bottom: 1%; margin-left: 1%;" class="mb-2"
        >
            <b-card-text>
                Er du klar til at ansøge om unban?
                <br />
                Når du er klar så tryk på "Ansøg om unban"
                <span>afvist</span> har du ikke en chance længere.
                <b-button @click="ansog = !ansog" variant="success"> 
                    Ansøg om unban
                </b-button>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
export default {
    name: "UnbanAnsogCard",
    data() {
        return {
            ansog: false,
            selected: null,
            options: [{ value: null, text: "Ingame-navn?" }],
        }
    },
    components: {
        BButton
    },
    sockets: {
        tidUdløb: function() {
            this.ansøg = false;
        }
    },
    async created() {
        
    },
    methods: {
        UpdateLinks: async function () {
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
            this.options = response.data
          })
        }
    }
}
</script>