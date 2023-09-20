<!-- НАДО ПЕРЕДЕЛАТЬ ПОД ИЗМЕНЕНИЕ ЗАДАЧИ -->

<template>
  <div class="scrollable-container">
  <v-form @submit.prevent="submitChange" class="scrollable-form">
        Задание:
      <v-text-field
        v-model="form_task.name"
        :rules="rules"
      ></v-text-field>
        Список задач:
      <v-btn  @click="addSubtask" icon="$plus" color="green" class="ma-2 pa-"></v-btn>
      <v-btn  @click="changeShowDelBtn" icon="$error" color="red" class="ma-2 pa-2"></v-btn>
    <table class="centered-table" style="margin-right: 20px;"> <!-- Добавляем отступ слева (примерно 20px) -->
      <tr>
        <th>Статус</th>
        <th>Название</th>
      </tr>
      <tr v-for="(item, index) in form_task.subtasks">
        <td><v-checkbox v-model="item.status" label="Выполнено"></v-checkbox></td>
        <td><v-text-field v-model="item.name"></v-text-field></td>
        <v-btn :style="{ visibility: showDelBtn ? 'visible' : 'hidden' }" color="error" icon="$error" @click="deleteSubtask(index)" class="delete-button"></v-btn>
      </tr>
    </table>
      <v-btn block class="mt-2" type="submit">Изменить задачу</v-btn>
    </v-form>
  </div>
</template>

<script>
import subTaskList from "@/components/subTaskList";
export default {
  components: {
    subTaskList
  },
  data() {
    return {
      form_task: {
        name: this.task.name,
        subtasks: JSON.parse(JSON.stringify(this.task.subtasks))
      },
      rules: [
        value => {
          if (value) return true
          return 'Введите название задачи'
        },
      ],
      history: [],
      showDelBtn: false// история изменений. Просто при каждом пуке пушим объект.
    }
  },
  props: {
    task: Object,
    required: true
  },
  methods: {
    pushToStorage() {

    },
    pushToHistory(){
      this.history.push(this.form_task)
    },
    addSubtask() {
      this.form_task.subtasks.push({
        name: '',
        status: false
      })
    },
    deleteSubtask(index) {
      this.form_task.subtasks.splice(index, 1)
    },
    submitChange(){
      this.$store.commit('EDIT_TASK', {old_elem_name: this.task.name, new_elem: this.form_task})
    },
    changeShowDelBtn(){
      this.showDelBtn = !this.showDelBtn
    }
  }
}
</script>

<style scoped>
.scrollable-container {
  max-height: 650px; /* Максимальная высота контейнера, после которой он начнет прокручиваться */
  overflow-y: auto; /* Добавляем вертикальную прокрутку при необходимости */
}

.scrollable-form {
  padding: 20px; /* Добавьте отступы, если необходимо */
}

.scrollable-container::-webkit-scrollbar {
  width: 0.5em; /* Ширина ползунка */
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: transparent;
}
th{
  font-weight: normal;
  text-align: center;
}
.centered-table {
  margin: 0 auto;
  width: 80%;
  border-collapse: collapse;
}

.centered-table th, .centered-table td {
  padding: 10px; /* Отступы между содержимым ячеек */
  text-align: left; /* Выравнивание текста в ячейках */
}
.delete-button {
  margin-top: 10px;
}
</style>
