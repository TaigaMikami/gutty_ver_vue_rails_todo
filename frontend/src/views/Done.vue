<template>
  <div>
  <v-container>
    <v-layout row>
      <v-flex xs5>
        <DoneTask />
      </v-flex>
      <v-flex xs5>
        <DoneTask />
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  import DoneTask from '@/components/modules/DoneTask'

  export default {
    name: 'Task',
    components: {
      DoneTask
    }
  }
</script>
