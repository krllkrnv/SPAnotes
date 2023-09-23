<template>
  <div>
    <v-form @submit.prevent="submitChange" class="scrollable-form">
      Задание:
      <v-text-field
        @input="pushToHistoryWithDelay"
        v-model="form_task.name"
        :rules="rules"
      ></v-text-field>
      Список задач:
      <v-btn @click="addSubtask" icon="$plus" color="green" class="ma-2 pa-"></v-btn>
      <v-btn @click="changeShowDelBtn" icon="$error" color="red" class="ma-2 pa-2"></v-btn>
      <div class="scrollable-container">
        <table
          class="centered-table">
          <tr>
            <th>Статус</th>
            <th>Название</th>
          </tr>
          <tr v-for="(item, index) in form_task.subtasks">
            <td>
              <v-checkbox
                @change="pushToHistory"
                v-model="item.status" label="Выполнено"></v-checkbox>
            </td>
            <td>
              <v-text-field v-model="item.name"
                            @input="pushToHistoryWithDelay"
              ></v-text-field>
            </td>
            <v-btn
              :style="{ visibility: showDelBtn ? 'visible' : 'hidden' }" color="error" icon="$error"
              @click="deleteSubtask(index)" class="delete-button"></v-btn>
          </tr>
        </table>
      </div>
      <v-btn icon="mdi-undo" class="ma-2 pa-2" @click="undo"></v-btn>
      <v-btn icon="mdi-redo" class="ma-2 pa-2" @click="redo"></v-btn>
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
        subtasks: JSON.parse(JSON.stringify(this.task.subtasks)) // поскольку передается ссылка, делаем полную копию
      },
      rules: [
        value => {
          if (value) return true
          return 'Введите название задачи'
        },
      ],
      history: [], // история изменений. Просто при каждом пуке пушим объект.
      showDelBtn: false,
      inputTimer: 0,
      historyIndex: 0
    }
  },
  created() {
    this.pushToHistory()
    this.historyIndex = this.historyIndex - 1// сразу при инициализации компонента пушим в историю первоначальное состояние.
  },
  props: {
    task: Object,
    required: true
  },
  methods: {
    pushToHistory() {
      this.history.splice(this.historyIndex + 1); // для того чтобы при внесении изменения после отката удалялась лишняя история
      this.history.push({
        name: this.form_task.name,
        subtasks: JSON.parse(JSON.stringify(this.form_task.subtasks))
      })
      this.historyIndex = this.historyIndex + 1
      console.table(this.history)
      console.log(this.historyIndex)
    },
    addSubtask() {
      this.form_task.subtasks.push({
        name: '',
        status: false
      });
      this.pushToHistory()
    },
    deleteSubtask(index) {
      this.form_task.subtasks.splice(index, 1);
      this.pushToHistory()
    },
    submitChange() {
      this.$store.commit('EDIT_TASK', {old_elem_name: this.task.name, new_elem: this.form_task})
    },
    changeShowDelBtn() {
      this.showDelBtn = !this.showDelBtn
    },
    pushToHistoryWithDelay() {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
      }
      this.inputTimer = setTimeout(() => {
        this.pushToHistory();
      }, 750)
    },
    undo() {
      if (this.historyIndex > 0) {
        this.historyIndex = this.historyIndex - 1
        this.form_task = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
      }
      console.log(this.historyIndex)

    },
    redo() {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex = this.historyIndex + 1
        this.form_task = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
      }
      console.log(this.historyIndex)

    }
  }
}
</script>

<style>

table{
  border: 1px solid gray;
}
th {
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
