import {createStore} from "vuex"
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

const graphqlUrl = 'http://localhost:4000/';

export default createStore({

  state: {
    tasks: [],
  },
  getters: {
    TASKS: state => {
      return state.tasks;
    },
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
    SET_MOCKED_TASKS: (state, payload) => {
      state.tasks = payload
    }
  },
  actions: {
    MOCK_AND_SET: ({commit, getters}) => {
      if (getters.TASKS.length === 0) {
        const query = `
        {
          tasks {
            name
            id
            subtasks {
              name
              status
              id
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
