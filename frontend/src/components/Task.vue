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
  import { mapGetters } from 'vuex'

  export default {
    name: 'Task',
    data: () => ({
      pagination: {
        sortBy: 'title'
      },
      selected: [],
      ready_tasks: [],
    }),
    computed: mapGetters({
      headers: 'getHeaders'
    }),
    mounted() {
      this.fetchTask();
    },

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = [];
        else {
          this.selected = this.tasks.slice()
          for(let id in this.selected) {
            this.doneTask(id);
          }
        }

      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column;
          this.pagination.descending = false
        }
      },
      fetchTask () {
        this.$axios.get('http://localhost:3000/tasks')
          .then(response => {
            this.ready_tasks = response.data;
            console.log(response.data);
          })
          .catch((reason) => {
            console.log(reason);
          });
      },

      doneTask (task_id) {
        this.$axios.put('http://localhost:3000/tasks/' + task_id, { task: { status: 2 }})
          .then(response => {
            console.log(response);
            location.reload();
          })
          .catch((reason) => {
            console.log(reason);
          });
      }
    },

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
