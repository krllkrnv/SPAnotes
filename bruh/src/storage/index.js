import {createStore} from "vuex"

export default createStore({
  state: {
    showAddTaskDialogue: false,
    showEditTaskDialogue: false,
    showDeleteTaskDialogue: false,
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
      }, {
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
    GET_ADD_TASK_DIALOGUE_STATUS: state => {
      return state.showAddTaskDialogue
    },
    GET_EDIT_TASK_DIALOGUE_STATUS: state => {
      return state.showEditTaskDialogue
    },
    GET_DELETE_TASK_DIALOGUE_STATUS: state => {
      return state.showDeleteTaskDialogue
    }
  },
  mutations: {
    SET_TASKS: (state, payload) => {
      state.tasks.push(payload);
    },
    EDIT_TASK: (state, payload) => {
      state.tasks.forEach((item, index) => {
        if (item.name === payload.old_elem_name) {
          state.tasks[index] = payload.new_elem
        }
      })
    },
    DEL_TASK: (state, payload) => {
      state.tasks.splice(payload, 1);
    },
    SET_ADD_TASK_DIALOGUE_STATUS: (state) => {
      state.showAddTaskDialogue = !state.showAddTaskDialogue
    },
    SET_EDIT_TASK_DIALOGUE_STATUS: (state) => {
      state.showEditTaskDialogue = !state.showEditTaskDialogue
    },
    SET_DELETE_TASK_DIALOGUE_STATUS: (state) => {
      state.showDeleteTaskDialogue = !state.showDeleteTaskDialogue
    },
    SET_ADD_TASK_DIALOGUE_STATUS_FALSE: (state) => {
      state.showAddTaskDialogue = false
    },
    SET_EDIT_TASK_DIALOGUE_STATUS_FALSE: (state) => {
      state.showEditTaskDialogue = false
    },
    SET_DELETE_TASK_DIALOGUE_STATUS_FALSE: (state) => {
      state.showDeleteTaskDialogue = false
    },
  }
})
