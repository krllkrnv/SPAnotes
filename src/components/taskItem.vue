<!--
  Задача
 -->

<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="rounded" style="height: 100%;"><div class="pa-3">{{ task.name }}</div></v-sheet>
      </v-col>
      <v-divider :thickness="10" color="grey-lighten-4" vertical></v-divider>
      <v-col>
        <v-sheet class="abc rounded d-flex flex-row" style="height: 100%;">
          <div style="flex-grow: 1;">
            <sub-task-list
              :checkbox_status="true"
              :subtasks="task.subtasks"/>
          </div>
          <div class="ma-1 pa-1">
            <delete-task
              :task="task"
              :delete-button-visible="deleteButtonVisible"
              @delete-task="deleteTask"
            />
            <edit-task
              :task="task"
              :edit-button-visible="editButtonVisible"
              @delete-task="deleteTask"
            />
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
    ...mapGetters(["GET_DELETE_TASK_DIALOGUE_STATUS", "TASKS"]),
  },
};
</script>

<style scoped>
.abc {
  align-items: stretch;
  max-height: 175px;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.abc:hover {
  max-height: 500px;
}
</style>
