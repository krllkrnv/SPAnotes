import {createStore} from "vuex"

export default createStore({
  state: {
    tasks: [{a: 5}, {b: 134}, {c: 3}],
  },
  getters: {
    TASKS: state => {
      return state.tasks;
    },
  },
  mutations: {}
})
