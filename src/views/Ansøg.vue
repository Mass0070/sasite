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
            title="Ansøg"
            title-class="text-primary"
            content-class="bg-dark"
            header-close-variant="primary"
            cancel-title="Annuller"
            v-model="ansøg"
          >
            <b-form-select
              :options="options"
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

export default {
  data() {
    return {
      ansøg: false,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
      ],
    };
  },
  components: {
    BButton,
  },
};
</script>
