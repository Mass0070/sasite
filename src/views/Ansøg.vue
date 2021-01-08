<template>
  <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 2%; margin-left: auto; margin-right: auto;">
    <unban-ansog-card />
  </div>
</template>
<script>
//import Axios from "axios";
import UnbanAnsogCard from "./Unban/UnbanAnsogCard.vue";

export default {
  name: "ansøg",
  components: {
    UnbanAnsogCard,
  },
};
</script>
