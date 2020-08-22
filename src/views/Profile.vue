<template>
    <div class="Grid">
        <div v-for="x in info" class="Unban" :key="x.id">
            <p class="UnbanId"><a v-bind:href="'/ansøgning/'+ x.UnbanId">{{ x.UnbanId }}</a></p>
            <p>Status: {{ x.status }}</p>
            <p>Oprettet: {{ x.createdAt }}</p>
            <p>Seneste opdateret: {{ x.updatedAt }}</p>
        </div>
    </div>
</template>

<style>
.UnbanId {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}
.UnbanId:hover {
  opacity: 0.8
}
.Unban {
    margin: 0 auto;
    background-color: #4CA3F4;
    width: 225px;
    height: 225px;
    border-radius: 30px;
    text-align: center;
}
p {
  color: black;
  font-size: 15px;
}
.Grid {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    width: 65%;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
    margin: 0 auto;
    text-align: left;
}
</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: [],
      user: []
    }
  },
  mounted () {
    axios.get('https://api.superawesome.ml/api/user/', {
        headers: {
            "API-Key": `${localStorage.token}`
        }
    })
    .then(response => (this.info = response.data))  
  }
}
</script>