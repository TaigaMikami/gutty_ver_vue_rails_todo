<template>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">{{ title }}<v-btn class="mx-0" color="primary" large>{{ status }}</v-btn></h3>

          <v-divider class="my-3"></v-divider>

          <p class="subheading">{{ content }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    data: () => ({
      title: '',
      content: '',
      status: '',
    }),
    props: {
      id: Number
    },
    mounted() {
      this.fetchTaskDetail();
    },
    methods: {
      fetchTaskDetail() {
        this.$axios.get('http://localhost:3000/tasks/' + this.id)
          .then(response => {
            this.title = response.data.title
            this.content = response.data.content
            this.status = response.data.status
          })
          .catch((reason) => {
            console.log(reason);
          });
      }
    }
  }
</script>