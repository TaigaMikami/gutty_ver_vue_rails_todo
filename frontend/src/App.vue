<template>
  <v-app>
    <v-toolbar app>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
