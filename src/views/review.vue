<template>
  <div>
    <div
      v-if="Array.isArray(applications) && applications.length > 0"
      class="Grid"
    >
      <div
        v-for="x in applications"
        class="Unban"
        v-show="applications"
        :key="x.id"
        @click="
          $router.push({
            name: x.UnbanId ? 'Ansøgning' : 'Supporter',
            params: { id: x.UnbanId ? x.UnbanId : x._id },
          })
        "
      >
        <p class="UnbanId">
          <a> <span>ID:</span> {{ x.UnbanId ? x.UnbanId : x._id }} </a>
        </p>
        <p class="UnbanId">
          <a>
            <span>DISCORD ID:</span>
            {{ x.discordId ? x.discordId : x.info.discordId }}
          </a>
        </p>
        <p class="P-Status">
          Status:<br />
          <span class="P-Status-Afvist" v-if="getStatus(x) === 'Afvist'"
            ><svg
              data-v-41be6633=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="x circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-x-circle mx-auto b-icon bi"
            >
              <g data-v-41be6633="">
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                ></path>
              </g></svg
            >{{ getStatus(x) }}</span
          >
          <span
            class="P-Status-Accepteret"
            v-else-if="getStatus(x) === 'Accepteret'"
            ><svg
              data-v-41be6633=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="check circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-check-circle mx-auto b-icon bi"
            >
              <g data-v-41be6633="">
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                ></path>
              </g></svg
            >{{ getStatus(x) }}</span
          >
          <span class="P-Status-Sendt" v-else-if="getStatus(x) === 'Sendt'"
            ><svg
              data-v-41be6633=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="dash circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-dash-circle mx-auto b-icon bi"
            >
              <g data-v-41be6633="">
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                ></path>
              </g></svg
            >{{ getStatus(x) }}</span
          >
          <span v-else-if="getStatus(x) === 'Annulleret'"
            ><svg
              data-v-41be6633=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="slash circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-slash-circle mx-auto b-icon bi"
            >
              <g data-v-41be6633="">
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"
                ></path>
              </g></svg
            >{{ getStatus(x) }}</span
          >
          <span v-else>{{ getStatus(x) }}</span>
        </p>
        <p class="P-Oprettet">
          Oprettet:<br /><span>{{ getTime(x.createdAt) }}</span>
        </p>
        <p class="P-Opdateret">
          Seneste opdateret:<br /><span>{{ getTime(x.updatedAt) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Unban {
  margin-top: 1%;
  border-radius: 30px;
  text-align: center;
  transition: 0.7s;
  border: 4px solid #1f5bbb;
  background-color: #212529;
  width: 20em;
  height: 24em;
}
.Unban:hover {
  box-shadow: -4px 4px 15px rgba(0, 107, 214, 0.5),
    4px -4px 15px rgba(0, 231, 169, 0.5);
  transition: 0.7s;
  line-height: normal;
  transform: scale(0.9);
  transition: 0.7s;
}
.UnbanId {
  color: lightgrey;
  margin-top: 1em;
}
.UnbanId span {
  color: #04ef04;
}

.P-Status {
  margin-top: 1em;
}
.P-Status-Accepteret {
  color: #04ef04;
  font-family: "Times New Roman", Times, serif;
}
.P-Status-Afvist {
  color: crimson;
  font-family: "Times New Roman", Times, serif;
}
.P-Status-Sendt {
  color: orange;
  font-family: "Times New Roman", Times, serif;
}
.P-Oprettet {
  margin-top: 1em;
}
.P-Oprettet span {
  color: #04ef04;
}
.P-Opdateret {
  margin-top: 1em;
}
.P-Opdateret span {
  color: #04ef04;
}
.Grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 30px;
}
p {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: lightgrey;
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
</style>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "ansøg",
  data() {
    return {
      applications: [],
    };
  },
  async created() {
    await axios
      .get("https://api.superawesome.ml/supporterapply/", {
        headers: { "API-Key": `${localStorage.token}` },
        params: { status: "Sendt" },
      })
      .then((response) => {
        this.applications = response.data;
      });
  },
  methods: {
    getStatus: function (x) {
      let status = "NULL";
      if (x.status !== null) status = x.status;
      if (x.info.status !== null) status = x.info.status;
      return status;
    },
    getTime: function (time) {
      return dayjs(time).locale("da").format("D MMMM YYYY HH:MM");
    },
  },
};
</script>
