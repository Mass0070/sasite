<template>
  <div id="about" v-if="info.svar1">
    <div class="Hover">
      <h3>{{ question.q1 }}</h3>
      <p>{{ info.svar1 }}</p>
    </div>
    <div class="Hover">
      <h3>{{ question.q2 }}</h3>
      <p>{{ info.svar2 }}</p>
    </div>
    <div class="Hover">
      <h3>{{ question.q3 }}</h3>
      <p>{{ info.svar3 }}</p>
    </div>
    <div class="Hover">
      <h3>{{ question.q4 }}</h3>
      <p>{{ info.svar4 }}</p>
    </div>
    <div class="Hover">
      <h3>{{ question.q5 }}</h3>
      <p>{{ info.svar5 }}</p>
    </div>
  </div>
  <div v-else-if="info" id="Notloggedin"> 
    <div id="Notloggedindiv">
      <h1>Du er ikke logget ind.</h1>
      <p>Tryk her for at login.</p>
    </div>
  </div>
</template>

<style>
.hover {
  font-family: arial;
}
#Notloggedindiv {
  text-align: center;
}
.Hover:hover {
  opacity: 0.8
} 
#Notloggedin {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  background-color: #272626;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
#about {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  background-color: #272626;
  border-radius: 30px;
  width: 65%;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
p {
  color: gray;
  font-size: 100%;
}
</style>

<script defer>
import axios from 'axios'
import questionARK from '../question'
export default {
  data () {
    return {
      info: {},
      question: {}
    }
  },
  mounted () {
    if(localStorage.token) {
      axios
      .get('http://localhost:4040/api/apply/' + this.$route.params.id,
        {
          headers: {
            "API-Key": `${localStorage.token}`
          }
        })
      .then(response => {
        switch(response.status) {
          case 200:

          case 401:

          case 403:

          case 500:

        }
        console.log(response)
        this.info = response.data
        this.question = questionARK
      })
    } else {
      this.info = "Ikke adgang"
    }
  }
}
</script>
