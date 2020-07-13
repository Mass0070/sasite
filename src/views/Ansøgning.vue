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
</template>

<style>
.Hover:hover {
  opacity: 0.8
} 
#about {
  display: grid;
  background-color: #272626;
  border-radius: 30px;
  width: 65%;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(250px, auto);
}
p {
  color: gray;
  font-size: 150%;
  padding-left: 7.25%;
  padding-right: 7.25%;
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
    axios
      .get('http://localhost:4040/api/apply/' + this.$route.params.id)
      .then(response => (this.info = response.data))
    this.question = questionARK
  }
}
</script>