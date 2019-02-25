<template>
  <v-app>
    <Head />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import Head from '@/components/Head'

  export default {
    name: 'App',
    components: {
      Head
    },
    data () {
      return {
        //
      }
    }
  }
</script>
