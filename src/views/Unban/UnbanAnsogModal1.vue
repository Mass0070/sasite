<template>
  <b-modal
    title="Unban Ansøgning"
    v-model="this.enablemodal"
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
</template>

<script>
export default {
  name: "UnbanAnsogModal1",
  data() {
    return {
      selected: null,
      options: [{ value: null, text: "Ingame-navn?" }],
    };
  },
  mounted() {
    console.log("Test");
  },
};
</script>
