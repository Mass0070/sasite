<template>
  <h1>Loading...</h1>
</template>

<script>
export default {
  mounted() {
    console.log(window.location.search);
    let urlParams = new URLSearchParams(window.location.search);
    window.localStorage.token = urlParams.get("code");
    window.location.replace("/profile");
  },
};
</script>
