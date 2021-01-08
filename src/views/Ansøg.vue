<template>
  <div
    style="
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2%;
      margin-left: auto;
      margin-right: auto;
    "
  >
    <unban-ansog-card />
  </div>
</template>
<script>
//import SupporterAnsogCard from "./Modals/SupporterAnsogCard.vue";

export default {
  name: "ansøg",
  components: {
    UnbanAnsogCard: () => import('./Modals/UnbanAnsogCard.vue')
    //SupporterAnsogCard,
  },
};
</script>
