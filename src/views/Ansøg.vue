<template>
  <div>
    <unban-ansog-card />
  </div>
</template>
<script>
//import Axios from "axios";
import UnbanAnsogCard from './Unban/UnbanAnsogCard.vue';

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
    UnbanAnsogCard,
  }, 
  /*methods: {
    updateOptions: async function() {
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
      console.log(bvEvent + modalId)
      this.checkanswer
    })
  } */
};
</script>
