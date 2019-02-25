<template>
  <div class="todo-form">
    <h2>Add Todo Item</h2>
    <v-form ref="form">
      <v-text-field v-model="newTask" :counter="30" label="Title" required></v-text-field>

      <v-layout row>
      <v-flex xs10 class="content">
        <v-textarea v-model="newTaskContent" label="Content"></v-textarea>
      </v-flex>
      <v-flex xs2 class="submit-btn">
        <v-btn fab dark color="success"  @click="createTask">
          <v-icon dark>add</v-icon>
        </v-btn>
      </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data: () => ({
      newTask: '',
      newTaskContent: ''
    }),
    methods: {
      createTask () {
        if (!this.newTask) return;

        this.$axios.post('http://localhost:3000/tasks', { task: { title: this.newTask, content: this.newTaskContent, status: 0 }})
          .then(response => {
            console.log(response);
            this.newTask = '';
            this.newTaskContent = '';
            location.reload();
          })
          .catch((reason) => {
            console.log(reason);
          });
      }
    }
  }
</script>

<style scoped>
  .todo-form {
    margin: 1% 7% 1% 3%;
    padding: 1% 3%;
    background-color: white;
  }

  .content ,.submit-btn {
    margin: 0;
  }

  .v-btn {
    position: absolute;
    top: 200px;
    left: 80%;
  }
</style>