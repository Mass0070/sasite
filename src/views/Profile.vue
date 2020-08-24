<template>
  <div>
    <hr>
    <div class="Grid" v-if="info.length > 0">
      <div v-for="x in info" class="Unban" :key="x.id">
        <p class="UnbanId"><a v-bind:href="'/ansøgning/'+ x.UnbanId"><span>ID:</span> {{ x.UnbanId }}</a></p>
        <p class="P-Status">Status:<br><span class="P-Status-afvis" v-if="x.status === 'Afvist'">{{ x.status }}</span><span class="P-Status-accepteret" v-else-if="x.status === 'Accepteret'">{{ x.status }}</span><span v-else>{{ x.status }}</span></p>
        <p class="P-Oprettet">Oprettet:<br><span>{{ x.createdAt }}</span></p>
        <p class="P-Opdateret">Seneste opdateret:<br><span>{{ x.updatedAt }}</span></p>
      </div>
    </div>
    <div v-show="info.length === 0" id="zeroClass">
      <div id="zeroClassdiv">
        <h1>Du har <span>ikke</span> lavet nogen ansøgninger</h1>
      </div>
    </div>
  </div>
</template>

<style>
p {
  color: black;
  font-size: 15px;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
#zeroClassdiv {
  margin: auto;
  text-align: center;
  color: #e6e6e6;
}
#zeroClassdiv span {
  color: crimson;
}
#zeroClass {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  background-color: #1f1e1e;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
.UnbanId {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin-top: 3.5%;
}
.UnbanId:hover {
  opacity: 0.8
}
.Unban {
    margin: 0 auto;
    background-color: #3495ef;
    width: 225px;
    height: 225px;
    border-radius: 30px;
    text-align: center;
}
.Grid {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    width: 65%;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(auto, auto);
    margin: 0 auto;
    text-align: left;
}
.Grid span {
  color: #04ef04;
  font-size: 110%;
  font-family: "Times New Roman", Times, serif;
}

.P-Status {
  font-size: 125%;
  margin-top: 4%;
}
.P-Status span {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}

.P-Status-afvis  {
  color: crimson;
  font-family: "Times New Roman", Times, serif;
  z-index: 100;
}

.P-Status-accepteret {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}

.P-Oprettet {
  font-size: 95%;
  margin-top: 4%;
}
.P-Oprettet span {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}

.P-Opdateret {
  font-size: 95%;
  margin-top: 4%;
}
.P-Opdateret span {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: false,
      user: []
    }
  },
  async created() {
    await axios.get('https://api.superawesome.ml/api/user/', {
        headers: {
            "API-Key": `${localStorage.token}`
        }
    })
    .then(response => (this.info = response.data))  
    await console.log(this.info.length)
  }
}
</script>