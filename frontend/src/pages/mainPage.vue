<template>
  <div>
    <tool-bar
      @pass-statuses="changeStatuses"
      class="mt-4"/>
    <v-dialog
      v-model="showAddTaskDialogue">
      <div
        class="dialog">
        <div
          class="dialog__content">
          <add-task-form
            @form-submitted="showAddTaskDialogue = false"
          />
        </div>
      </div>
    </v-dialog>
    <v-card
      variant="tonal"
      class="text-center"
      v-if="TASKS.length === 0"
    >
      Заданий нет
    </v-card>
    <task-list
      v-else
      :show-edit-buttons="showEditButtons"
      :show-delete-buttons="showDeleteButtons"
      :tasks="TASKS"
    />
  </div>
</template>

<script>
import taskList from "@/components/taskList";
import toolBar from "@/components/toolBar";
import addTaskForm from "@/components/addTaskForm";
import editTaskForm from "@/components/editTaskForm.vue";
import deleteTask from "@/components/deleteTask.vue";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      dialogVisible: false,
      showAddTaskDialogue: false,
      showEditButtons: false,
      showDeleteButtons: false,
    }
  },
  methods: {
    changeStatuses(addStatus, editStatus, deleteStatus){
      this.showAddTaskDialogue = addStatus;
      this.showEditButtons = editStatus;
      this.showDeleteButtons = deleteStatus
    }
  },
  components: {taskList, toolBar, addTaskForm, editTaskForm, deleteTask},
  computed: {
    ...mapGetters(['TASKS']),
  },
}
</script>

<style>
.dialog {
  position: fixed;
  bottom: 350px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 5px;
  min-height: 50px;
  min-width: 500px;
}
</style>
