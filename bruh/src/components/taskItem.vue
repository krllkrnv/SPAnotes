<!-- БРАТАНЧИК РАЗНЕСИ КНОПКИ ПО КОМПОНЕНТАМ. МОЖНО СДЕЛАТЬ ПАПКУ UI
     ОЧЕНЬ МНОГО КОДА И ЛОГИКИ
 -->

<template>
  <div>
    <v-row align="top" no-gutters>
      <v-col>
        <v-sheet class="rounded" style="height: 100%;">{{ task.name }}</v-sheet>
      </v-col>
      <v-divider
        :thickness="10"
        color="grey-lighten-4"
        vertical
      ></v-divider>
      <v-col>
        <v-sheet class="abc rounded d-flex flex-row" style="height: 100%;">
          <div style="flex-grow: 1;">
            <sub-task-list :subtasks="task.subtasks"></sub-task-list>
          </div>
          <div class="align-self-start">
            <v-btn
              v-show="deleteButtonVisible"
              class="pulse-button"
              color="error"
              icon="$delete"
              @click="dialog = true"
            ></v-btn>
            <v-btn
              v-show="editButtonVisible"
              class="pulse-button"
              color="warning"
              icon="$edit"
              @click=""
            ></v-btn>
            <v-dialog v-model="dialog" max-width="400">
              <v-card>
                <v-card-title>Подтвердите удаление задачи {{ task.name }}</v-card-title>
                <v-card-actions class="justify-center d-flex">
                  <v-btn color="error" @click="deleteTask(task)">Удалить</v-btn>
                  <v-btn color="primary" @click="dialog = false">Отмена</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SubTaskList from "@/components/subTaskList";
import {mapGetters} from "vuex";

export default {
  components: {SubTaskList},
  props: {
    task: Object,
    required: true
  },
  data() {
    return {
      deleteButtonVisible: false,
      dialog: false,
      editButtonVisible: false,
    }
  },
  watch: {
    '$store.getters.GET_DELETE_TASK_DIALOGUE_STATUS': function (newVal) {
      this.deleteButtonVisible = newVal
    },
    '$store.getters.GET_EDIT_TASK_DIALOGUE_STATUS': function (newVal) {
      this.editButtonVisible = newVal
    }
  },
  methods: {
    deleteTask(name) {
      this.$store.commit('DEL_TASK', this.$store.getters.TASKS.indexOf(name));
      this.dialog = false; // Закрываем окошко после удаления
    },
  },
  computed: {
    ...mapGetters(['GET_DELETE_TASK_DIALOGUE_STATUS']),
    ...mapGetters(['TASKS'])
  }
}
</script>

<style>
.abc {
  align-items: stretch; /* Растянуть по высоте */
  max-height: 175px; /* Начальная максимальная высота (скроет текст) */
  overflow: hidden; /* Скроет текст, который не помещается в максимальную высоту */
  transition: max-height 0.5s ease-in-out; /* Плавная анимация для свойства max-height */
}

.abc:hover {
  max-height: 500px; /* Максимальная высота при наведении (развернет текст) */
}

.pulse-button {
  animation: pulse 1s infinite;
}

.align-self-start {
  margin-top: 8px;
  margin-right: 8px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
