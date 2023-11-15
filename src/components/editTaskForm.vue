<!--
  Окно редактирования задания
 -->

<template>
  <div>
    <v-form @submit.prevent="submitChange" class="scrollable-form">
      Задание:
      <v-text-field
        @input="pushToHistoryWithDelay"
        v-model="form_task.name"
        :rules="rules"
      />
      Список задач:
      <v-btn @click="addSubtask" icon="$plus" color="green" class="ma-2 pa-"/>
      <v-btn @click="changeShowDelBtn" icon="$error" color="red" class="ma-2 pa-2"/>
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
                v-model="item.status" label="Выполнено"/>
            </td>
            <td>
              <v-text-field v-model="item.name"
                            @input="pushToHistoryWithDelay"
              />
            </td>
            <v-btn
              :style="{ visibility: showDelBtn ? 'visible' : 'hidden' }" color="error" icon="$error"
              @click="deleteSubtask(index)" class="delete-button"/>
          </tr>
        </table>
      </div>
      <v-btn icon="mdi-undo" class="ma-2 pa-2" @click="undo"/>
      <v-btn icon="mdi-redo" class="ma-2 pa-2" @click="redo"/>
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
      // история изменений. Просто при каждом пуке пушим объект.
      history: [],
      showDelBtn: false,
      inputTimer: 0,
      historyIndex: 0
    }
  },
  created() {
    // сразу при инициализации компонента пушим в историю первоначальное состояние.
    this.pushToHistory()
    // Уменьшаем индекс на 1.
    this.historyIndex = this.historyIndex - 1
  },
  props: {
    task: Object,
    required: true
  },
  methods: {
    pushToHistory() {
      // для того чтобы при внесении изменения после отката удалялась лишняя история
      this.history.splice(this.historyIndex + 1);
      this.history.push({
        name: this.form_task.name,
        subtasks: JSON.parse(JSON.stringify(this.form_task.subtasks))
      })
      this.historyIndex = this.historyIndex + 1
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
    // Для того, чтобы при каждом новом введенном символе не пушить в массив объект. Мб можно более оптимальную задержку подобрать. Или как-то с событием focus можно поработать здесь
    pushToHistoryWithDelay() {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
      }
      this.inputTimer = setTimeout(() => {
        this.pushToHistory();
      }, 750)
    },
    undo() {
      // Если текущий historyIndex > 0, уменьшаем его и копируем значение в текущий form_task
      if (this.historyIndex > 0) {
        this.historyIndex = this.historyIndex - 1
        this.form_task = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
      }
    },
    redo() {
      // Аналогичные действия
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex = this.historyIndex + 1
        this.form_task = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
      }
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
  padding: 10px;
  text-align: left;
}

.delete-button {
  margin-top: 10px;
}
</style>
