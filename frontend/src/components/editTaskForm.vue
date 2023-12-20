<!--
  Окно редактирования задания
 -->

<template>
  <div>
    <v-form
      class="scrollable-form"
      @submit.prevent="submitChange">
      Задание:
      <v-text-field
        v-model="form_task.name"
        :rules="rules"
        @input="pushToHistoryWithDelay"
      />
      Список задач:
      <v-btn
        class="ma-2 pa-"
        color="green"
        icon="$plus"
        @click="addSubtask"
      />
      <v-btn
        class="ma-2 pa-2"
        color="red"
        icon="$error"
        @click="changeShowDelBtn"
      />
      <div class="scrollable-container">
        <table
          class="centered-table">
          <tr>
            <th class="table-header">
              Статус
            </th>
            <th class="table-header">
              Название
            </th>
          </tr>
          <tr v-for="item in form_task.subtasks">
            <td>
              <v-checkbox
                v-model="item.status"
                label="Выполнено"
                @change="pushToHistory"
              />
            </td>
            <td>
              <v-text-field v-model="item.name"
                            @input="pushToHistoryWithDelay"
              />
            </td>
            <v-btn
              :style="{ visibility: showDelBtn ? 'visible' : 'hidden' }"
              class="delete-button"
              color="error"
              icon="$error"
              @click="deleteSubtask(item.id)"
            />
          </tr>
        </table>
      </div>
      <v-btn
        class="ma-2 pa-2"
        icon="mdi-undo"
        @click="undo"
      />
      <v-btn
        class="ma-2 pa-2"
        icon="mdi-redo"
        @click="redo"
      />
      <v-btn
        block
        class="mt-2"
        type="submit">
        Изменить задачу
      </v-btn>
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
      // история изменений
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
    task: {
      type: Object,
      required: true
    }
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
      this.form_task.subtasks.splice(this.form_task.subtasks.findIndex(item => item.id === index), 1)
      this.pushToHistory()
    },
    submitChange() {
      this.$store.commit('EDIT_TASK', {old_elem_name: this.task.name, new_elem: this.form_task})
      this.$emit('close-dialog');
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

.centered-table {
  margin: 0 auto;
  width: 80%;
  border-collapse: collapse;
  border: 1px solid gray;
}

.table-header {
  font-weight: normal;
  text-align: center;
}

.centered-table th, .centered-table td {
  padding: 10px;
  text-align: left;
}

.delete-button {
  margin-top: 10px;
}
</style>
