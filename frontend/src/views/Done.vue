<template>
  <div>
  <v-container>
    <DoneTask />
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
