<template>
  <v-container fluid>
    <Form />
    <v-layout row>
      <v-flex xs5>
        <h2>Ready</h2>
        <ReadyTask />
      </v-flex>
      <v-flex xs5>
        <h2>Doing</h2>
        <DoingTask />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ReadyTask from '@/components/modules/ReadyTask'
  import DoingTask from '@/components/modules/DoingTask'
  import Form from '@/components/modules/Form'

  export default {
    name: 'Task',
    components: {
      ReadyTask,
      DoingTask,
      Form
    }
  }
</script>

<style>
  .task-item {
    text-align: center;
  }

  .flex {
    margin: 0 3%;
  }
</style>
