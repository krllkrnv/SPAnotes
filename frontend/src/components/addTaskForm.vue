<!--
 Добавление задачи
 -->

<template>
  <div>
    <v-form
      class="scrollable-form"
      @submit.prevent="pushToStorage"
    >
      <v-text-field
        v-model="task.name"
        :rules="rules"
        label="Название задачи"
      />
      <div class="scrollable-container">
        <div v-for="subtask in task.subtasks"
             :key="subtask.id"
        >
          <v-card class="mb-2">
            <v-card-text>
              <v-text-field
                v-model="subtask.name"
                :rules="rules"
                label="Название подзадачи"
              />
              <div class="d-flex align-center">
                <v-checkbox
                  v-model="subtask.status"
                  label="Выполнено"
                />
                <v-spacer/>
                <v-btn
                  color="error"
                  prepend-icon="$delete"
                  @click="deleteSubtask(subtask.id)"
                >
                  Удалить
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
      <v-btn
        block
        class="mt-2"
        @click="addSubtask">Добавить подзадачу
      </v-btn>
      <v-btn
        block
        class="mt-2"
        type="submit">Добавить задачу
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: '',
        subtasks: [],
        id: null
      },
      rules: [
        value => {
          if (value) return true
          return 'Введите название задачи'
        },
      ]
    }
  },
  methods: {
    pushToStorage() {
      if (this.task.name && this.task.subtasks.length >= 1) {
        this.$store.commit('SET_TASKS', this.task)
        this.task = {
          name: '',
          subtasks: [],
          id: null
        }
        this.$emit('form-submitted');
      }
    },
    addSubtask() {
      this.task.subtasks.push({
        name: '',
        status: false,
        id: Math.random()
      })
    },
    deleteSubtask(index) {
      this.task.subtasks.splice(this.task.subtasks.findIndex(item => item.id === index), 1)
    }
  }
}
</script>

<style>
.scrollable-container {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
  min-height: 400px;
}

.scrollable-form {
  padding: 20px;
}

// Убираю ползунок прокрутки
.scrollable-container::-webkit-scrollbar {
  width: 0.5em;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>
