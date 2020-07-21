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
import axios from 'axios'
export default {
  data () {
    return {
      info: [],
      user: []
    }
  },
  mounted () {
    axios.get("https://discordapp.com/api/v6/users/@me",
        {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }
    )
    .then(response => {
        this.user = response.data
        axios
            .get('https://api.superawesome.ml/api/user/' + response.data.id)
            .then(response => (this.info = response.data))  
    })
  }
}
</script>