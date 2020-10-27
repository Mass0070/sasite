<template>
  <h1>Loading...</h1>
</template>

<script>
export default {
  mounted() {
    let urlParams = new URLSearchParams(window.location.hash);
    console.log(urlParams);
    window.localStorage.token = urlParams.get("access_token");
    setTimeout(() => {
      window.location.replace("/profile");
    }, 1000);
  }
};
</script>
