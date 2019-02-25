<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div class="content"> {{ content }} </div>
          </div>
        </v-card-title>

        <v-card-actions class="text-xs-right">
          作成日：<v-btn flat color="orange">{{ created_at }}</v-btn>
          <v-btn color="orange" @click="backUrl"><v-icon dark left>arrow_back</v-icon>back</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      title: '',
      content: '',
      status: '',
      created_at: ''
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
            this.created_at = response.data.created_at
          })
          .catch((reason) => {
            console.log(reason);
          });
      },

      backUrl() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .content {
    margin-top: 20px;
  }
</style>