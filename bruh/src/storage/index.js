import {createStore} from "vuex"
import axios from 'axios';
const graphqlUrl = 'http://localhost:4000/';
import createPersistedState from 'vuex-persistedstate'
export default createStore({

  state: {
    showAddTaskDialogue: false,
    showEditTaskDialogue: false,
    showDeleteTaskDialogue: false,
    tasks: [],
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
    SET_MOCKED_TASKS: (state, payload) => {
      state.tasks = payload
    }
  },
  actions: {
    MOCK_AND_SET:  ({commit, getters}) => {
      if (getters.TASKS.length === 0) {
      const query = `
        {
          tasks {
            name
            subtasks {
              name
              status
            }
          }
        }
      `;

      return axios
        .post(graphqlUrl, {query})
        .then((response) => {
          const data = response.data.data;
          commit("SET_MOCKED_TASKS", data.tasks);
          return data.tasks;
        })
        .catch((error) => {
          throw error;
        });
    }
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })]
})
