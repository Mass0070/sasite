<template>
    <div>
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
                <unban-ansog-modal-1 v-model="ansog" enablemodal=true>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
import UnbanAnsogModal1 from './UnbanAnsogModal1.vue';
export default {
    name: "UnbanAnsogCard",
    data() {
        return {
            ansog: false,
        }
    },
    components: {
        BButton,
        UnbanAnsogModal1,
    },
    sockets: {
        tidUdløb: function() {
            this.ansøg = false;
        }
    },
}
</script>