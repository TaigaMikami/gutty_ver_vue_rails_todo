<template>
  <v-toolbar app>
    <v-toolbar-title>TODO LIST</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><router-link to="/">Todo</router-link></v-btn>
      <v-btn flat><router-link to="/done">Done</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

