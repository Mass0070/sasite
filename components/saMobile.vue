<template>
  <div>
      <v-img alt="SuperAwesome.dk" max-height="50" max-width="50" src="https://dl.labymod.net/img/server/superawesome/icon@2x.webp"> </v-img>
  </div>
</template>

<style scoped>
.navbar-brand-S, .navbar-brand-A:hover {
    text-decoration: none;
    color: transparent;
    background-image: linear-gradient(to right, blue,dodgerblue,blue,dodgerblue);
    animation: text 10s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 1000%;
    z-index: 1;
}

.navbar-brand-S:hover, .navbar-brand-S:active {
    text-decoration: none;
    color: transparent;
    background-image: linear-gradient(to right, darkgreen,limegreen,darkgreen,limegreen);
    animation: text 10s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 1000%;
    z-index: 1;
}
.navbar-brand-A {
    text-decoration: none;
    color: transparent;
    background-image: linear-gradient(to right, darkgreen,limegreen,darkgreen,limegreen);
    animation: text 10s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 1000%;
}

@keyframes text {
    0% {
        background-position: 0% 100%;
    }

    50% {
        background-position: 100% 0%;
    }

    100% {
        background-position: 0% 100%;
    }
}
</style>
