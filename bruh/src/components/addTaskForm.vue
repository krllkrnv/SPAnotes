<template>
  <div class="scrollable-container">
  <v-form @submit.prevent="pushToStorage" class="scrollable-form">
    <v-text-field
      v-model="task.name"
      :rules="rules"
      label="Название задачи"
    ></v-text-field>
    <div v-for="(subtask, index) in task.subtasks" :key="index">
      <v-card class="mb-2">
        <v-card-text>
          <v-text-field
            v-model="subtask.name"
            :rules="rules"
            label="Название подзадачи"
          ></v-text-field>

          <div class="d-flex align-center">
            <v-checkbox v-model="subtask.status" label="Выполнено"></v-checkbox>
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="$delete"
              @click="deleteSubtask(index)"
              color="error"
            >Удалить</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <v-btn @click="addSubtask" block class="mt-2">Добавить подзадачу</v-btn>
    <v-btn type="submit" block class="mt-2">Добавить задачу</v-btn>
  </v-form>
  </div>
</template>

<script>
export default {
data(){
  return{
    task: {
      name: '',
      subtasks: []
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
  pushToStorage(){
    if (this.task.name && this.task.subtasks.length >= 1) {
      this.$store.commit('SET_TASKS', this.task)
      this.task = {
        name: '',
        subtasks: []
      }
      this.$store.commit('SET_ADD_TASK_DIALOGUE_STATUS');
    }
  },
    addSubtask(){
      this.task.subtasks.push({
        name: '',
        status: false
      })
    },
    deleteSubtask(index){
      this.task.subtasks.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.scrollable-container {
  max-height: 400px; /* Максимальная высота контейнера, после которой он начнет прокручиваться */
  overflow-y: auto; /* Добавляем вертикальную прокрутку при необходимости */
}

.scrollable-form {
  padding: 20px; /* Добавьте отступы, если необходимо */
}
.scrollable-container::-webkit-scrollbar {
  width: 0.5em; /* Ширина ползунка */
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: transparent; /* Цвет ползунка */
}
</style>
