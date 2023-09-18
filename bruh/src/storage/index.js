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
    GET_ADD_TASK_DIALOGUE_STATUS: state => {
      return state.showAddTaskDialogue
    },
    GET_EDIT_TASK_DIALOGUE_STATUS: state => {
      return state.showEditTaskDialogueTaskDialogue
    },
    GET_DELETE_TASK_DIALOGUE_STATUS: state => {
      return state.showDeleteTaskDialogueTaskDialogue
    }
  },
  mutations: {
    SET_TASKS: (state, payload) => {
      state.tasks.push(payload);
    },
    SET_ADD_TASK_DIALOGUE_STATUS: (state) => {
      state.showAddTaskDialogue = !state.showAddTaskDialogue
    },
    SET_EDIT_TASK_DIALOGUE_STATUS: (state) => {
      state.showEditTaskDialogueTaskDialogue = !state.showEditTaskDialogueTaskDialogue
    },
    SET_DELETE_TASK_DIALOGUE_STATUS: (state) => {
      state.showDeleteTaskDialogueTaskDialogue = !state.showDeleteTaskDialogueTaskDialogue
    }
  }
})
