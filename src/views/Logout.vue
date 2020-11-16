<template>
  <h1>Logout...</h1>
</template>

<script>
export default {
  mounted() {
    if (window.localStorage.token) {
      window.localStorage.removeItem("token");
    }
    window.location.replace("/");
  },
};
</script>
