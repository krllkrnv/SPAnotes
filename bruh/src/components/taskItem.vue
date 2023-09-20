<template>
  <div>
    <v-row align="top" no-gutters>
      <v-col>
        <v-sheet class="rounded" style="height: 100%;">{{ task.name }}</v-sheet>
      </v-col>
      <v-divider :thickness="10" color="grey-lighten-4" vertical></v-divider>
      <v-col>
        <v-sheet class="abc rounded d-flex flex-row" style="height: 100%;">
          <div style="flex-grow: 1;">
            <sub-task-list
              :checkbox_status="true"
              :subtasks="task.subtasks"></sub-task-list>
          </div>
          <div class="ma-1 pa-1">
            <delete-task
              :task="task"
              :delete-button-visible="deleteButtonVisible"
              @delete-task="deleteTask"
            ></delete-task>
            <edit-task
              :task="task"
              :edit-button-visible="editButtonVisible"
              @delete-task="deleteTask"
            ></edit-task>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SubTaskList from "@/components/subTaskList";
import DeleteTask from "@/components/DeleteTask";
import { mapGetters } from "vuex";
import EditTask from "@/components/editTask";

export default {
  components: {EditTask, SubTaskList, DeleteTask },
  props: {
    task: Object,
    required: true,
  },
  data() {
    return {
      deleteButtonVisible: false,
      editButtonVisible: false,
    };
  },
  watch: {
    "$store.getters.GET_DELETE_TASK_DIALOGUE_STATUS": function (newVal) {
      this.deleteButtonVisible = newVal;
    },
    "$store.getters.GET_EDIT_TASK_DIALOGUE_STATUS": function (newVal) {
      this.editButtonVisible = newVal;
    },
  },
  methods: {
    deleteTask(task) {
      this.$store.commit("DEL_TASK", this.$store.getters.TASKS.indexOf(task));
    },
  },
  computed: {
    ...mapGetters(["GET_DELETE_TASK_DIALOGUE_STATUS"]),
    ...mapGetters(["TASKS"]),
  },
};
</script>

<style scoped>
.abc {
  align-items: stretch; /* Растянуть по высоте */
  max-height: 175px; /* Начальная максимальная высота (скроет текст) */
  overflow: hidden; /* Скроет текст, который не помещается в максимальную высоту */
  transition: max-height 0.5s ease-in-out; /* Плавная анимация для свойства max-height */
}

.abc:hover {
  max-height: 500px; /* Максимальная высота при наведении (развернет текст) */
}

</style>
