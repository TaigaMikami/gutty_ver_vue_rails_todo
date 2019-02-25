<template>
  <v-app>
    <v-toolbar app>
        <router-link to="/">Todo</router-link> |
        <router-link to="/done">Done</router-link>
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
