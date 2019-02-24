import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Task = {
  nameSpaced: true,
  state: {
    headers: [
      {
        text: 'Title',
        value: 'title'
      },
      {
        text: 'Status',
        value: 'status'
      }
    ],
    tasks: [
      {
        title: 'task1',
        content: 'task1はオレンジを買ってくることです。',
        status: 1
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getHeaders (state) {
      return state.headers
    },
    getTasks (state) {
      return state.tasks
    }
  }
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Task
  }
})
