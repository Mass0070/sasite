<template>
    <div class="Grid">
        <div v-for="x in info" class="Unban" :key="x.id">
            <p>Id: {{ x.UnbanId }}</p>
        </div>
    </div>
</template>

<style>
.Unban {
    margin: 0 auto;
    background-color: #4CA3F4;
    width: 225px;
    height: 225px;
    border-radius: 30px;
    text-align: left;
}
.Grid {
    display: grid;
    width: 1250px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    margin: 0 auto;
    text-align: left;
}
</style>

<script>
window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    if (fragment.has("access_token")) {
        console.log("Test")
    }
}
import axios from 'axios'
export default {
    data () {
    return {
      info: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:4040/api/user/' + this.$route.params.id)
      .then(response => (this.info = response.data))
  }
}
</script>