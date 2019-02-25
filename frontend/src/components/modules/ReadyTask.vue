<template>
  <div>
    <h2>Ready</h2>
    <v-data-table v-model="selected" :items="tasks" :pagination.sync="pagination" select-all item-key="title" class="elevation-1">
      <template slot="headers" slot-scope="props">
        <tr class="ready-tr">
          <th>
            <v-checkbox :input-value="props.all" :indeterminate="props.indeterminate" primary hide-details @click.stop="toggleAll"></v-checkbox>
          </th>
          <th v-for="header in headers" :key="header.text" :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']" @click="changeSort(header.value)">
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr>
          <td  :active="props.selected" @click="props.selected = !props.selected">
            <v-checkbox :input-value="props.selected" primary hide-details @click="moveDoingTask(props.item.id)"></v-checkbox>
          </td>
          <td class="task-item">{{ props.item.title }}</td>
          <td class="text-xs-right">
            <router-link :to="`/tasks/${props.item.id}`">
              <v-btn color="info">
                詳細
              </v-btn>
            </router-link>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Task',
    data: () => ({
      pagination: {
        sortBy: 'title'
      },
      selected: [],
      tasks: [],
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
          for(let i in this.selected) {
            console.log(this.selected[i]);
            this.moveDoingTask(this.selected[i].id);
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
            this.tasks = response.data;
          })
          .catch((reason) => {
            console.log(reason);
          });
      },

      moveDoingTask (task_id) {
        this.$axios.put('http://localhost:3000/tasks/' + task_id, { task: { status: 1 }})
          .then(response => {
            location.reload();
          })
          .catch((reason) => {
            console.log(reason);
          });
      }
    }
  }
</script>

<style>
  .ready-tr {
    background-color: lightblue;
  }
</style>
