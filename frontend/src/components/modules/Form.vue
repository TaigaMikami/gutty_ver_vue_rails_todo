<template>
  <v-form ref="form">
    <v-text-field v-model="newTask" :counter="30" label="Title" required></v-text-field>
    <v-textarea v-model="newTaskContent" label="Content"></v-textarea>
    <v-btn fab dark color="success"  @click="createTask">
      <v-icon dark>add</v-icon>
    </v-btn>
  </v-form>
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

<style>
  .v-form {
    margin: 1% 4%;
  }
</style>