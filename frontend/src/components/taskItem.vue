<!--
  Задача
 -->

<template>
  <div>
    <v-row no-gutters>
      <v-col>
        <v-sheet
          class="rounded task-item-sheet">
          <div class="pa-3">
            {{ task.name }}
          </div>
        </v-sheet>
      </v-col>
      <v-divider
        :thickness="10"
        color="grey-lighten-4"
        vertical
      />
      <v-col>
        <v-sheet class="right-column rounded d-flex flex-row">
          <div
            class="sub-task-list"
          >
            <sub-task-list
              :subtasks="task.subtasks"
            />
          </div>
          <div class="ma-1 pa-1">
            <edit-task
              :edit-button-visible="showEditButtons"
              :task="task"
              @delete-task="deleteTask"
            />
            <delete-task
              :delete-button-visible="showDeleteButtons"
              :task="task"
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
import {mapGetters} from "vuex";
import EditTask from "@/components/editTask";

export default {
  components: {EditTask, SubTaskList, DeleteTask},
  props: {
    task: Object,
    showEditButtons: Boolean,
    showDeleteButtons: Boolean,
    required: true,
  },
  methods: {
    deleteTask(task) {
      this.$store.commit("DEL_TASK", this.$store.getters.TASKS.indexOf(task));
    },
  },
  computed: {
    ...mapGetters(["TASKS"]),
  },
};
</script>

<style scoped>
.right-column {
  align-items: stretch;
  max-height: 175px;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.right-column:hover {
  max-height: 500px;
  height: 100%;
}

.task-item-sheet {
  height: 100%;
}

.sub-task-list {
  flex-grow: 1;
}
</style>
