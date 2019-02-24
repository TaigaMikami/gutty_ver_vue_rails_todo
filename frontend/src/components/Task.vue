<template>
  <v-container>
    <v-data-table
      v-model="selected"
      :items="tasks"
      :pagination.sync="pagination"
      select-all
      item-key="title"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td class="task-item">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.status }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
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
      this.$axios.get('http://localhost:3000/tasks')
        .then(response => {
          this.tasks = response.data
          console.log(response.data)
        })
        .catch((reason) => {
          console.log(reason);
        });
    },

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.tasks.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>

<style>
  .task-item {
    text-align: center;
  }

</style>
