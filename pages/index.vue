<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" >
      <v-card class="mx-auto">
        <v-card-title class="headline">
          Velkommen til&nbsp;<saDesktop />
        </v-card-title>
        <v-card-text>
          <p>SuperAwesome er en dansk minecraft server.</p>
          <p>
            Vi er et af de største Minecraft-netværk i Danmark, og vi tilbyder dig chancen for at oprette din egen server
            med mulighed for at oprette dit eget Minecraft community.
            <br />
            Men selvfølgelig har vi nogle <a href="regler.superawesome.ml">guidelines</a> du skal følge for at undgå at få ban.
          </p>
          <p>
            Vi er stolte over at have et partnerskab med:
            <a style="display: flex;">
              <v-img :src="require('~/assets/wolf128x128.png')" max-height="110" max-width="110" />
              <v-img :src="require('~/assets/Discord-Logo-White.png')" max-height="110" max-width="110" />
            </a>
          </p>      
          <hr class="my-3">
          <p>
            Vores sociale medier:
            <br />
            <v-btn
              href="https://discord.gg/SuperAwesome"
              target="_blank"
              color="primary"
            >
              <v-icon left>mdi-discord</v-icon>
              Discord
            </v-btn>
            <v-btn
              href="https://www.youtube.com/channel/UClhOqD9GXk2zGHZRluDLIBQ"
              target="_blank"
              color="primary"
            >
              <v-icon left>mdi-youtube</v-icon>
              Youtube
            </v-btn>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
