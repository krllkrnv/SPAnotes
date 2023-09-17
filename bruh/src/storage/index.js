import {createStore} from "vuex"

export default createStore({
  state: {
    tasks: [
      {
        name: 123,
        subtasks: [
          {
            name: 'heyy!!!',
            status: true
          },
          {
            name: 'addfs',
            status: false
          },
          {
            name: 'a',
            status: true
          }
        ]
      },{
        name: 'HIII!!!!!!!!!!',
        subtasks: [
          {
            name: 'aaaa!!!',
            status: false
          },
          {
            name: 'adfdsfdsfdfs',
            status: true
          },
          {
            name: 'a',
            status: true
          },
          {
            name: 'aa',
            status: true
          },
          {
            name: 'bb',
            status: false
          }
        ]
      }
    ],
  },
  getters: {
    TASKS: state => {
      return state.tasks;
    },
  },
  mutations: {
    SET_TASKS: (state, payload) => {
      state.tasks.push(payload);
    }
  }
})
