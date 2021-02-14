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
    <supporter-ansog-card />
  </div>
</template>
<script>
export default {
  name: "ansøg",
  components: {
    UnbanAnsogCard: () => import("./Modals/UnbanAnsogCard.vue"),
    SupporterAnsogCard: () => import("./Modals/SupporterAnsogCard.vue"),
  },
};
</script>
