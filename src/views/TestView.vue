<template>
  <v-app>
    <div id="text">
      <h1>Testing stuff</h1>
      <p class="red white--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis
        posuere morbi leo urna molestie at.
      </p>

      <p class="pink lighten-4 red--text darken-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis
        posuere morbi leo urna molestie at.
      </p>

      <h1 class="display-4 yellow darken-1">Massive Text</h1>

      <h4 class="display-1 green lighten-2">Smaller display</h4>

      <p class="headline font-weight-bold orange darken-4">Headline</p>
      <p class="subheading brown lighten-1">subheading</p>
      <p class="caption red lighten-3">caption</p>
    </div>
    <div id="buttons">
      <v-btn class="pink white--text">button</v-btn>
      <v-btn depressed class="grey lighten-3 black--text">button</v-btn>
      <v-btn class="lime white--text">button</v-btn>
      <v-btn depressed x-large class="blue white--text">
        <v-icon left xs>mdi-email-box</v-icon>email</v-btn
      >
      <v-btn depressed small color="purple">
        <v-icon left xs>mdi-email-box</v-icon>email</v-btn
      >

      <p>p test</p>
      <h1>
        h1 test
        <p>p test</p>
      </h1>

      <v-btn fab depressed small class="yellow">
        <v-icon xs>mdi-email-box</v-icon></v-btn
      >
    </div>

    <div id="breakpoints">
      <v-btn class="red hidden-sm-and-down white--text">button</v-btn>
      <!-- if less than sm size -->

      <v-btn class="green hidden-sm-only white--text">button</v-btn>
      <!-- if less thatn md size -->
    </div>
  </v-app>
</template>
