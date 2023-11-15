<!--
  Окно редактирования задания
 -->

<template>
  <div>
    <v-btn
      v-show="editButtonVisible"
      class="pulse-button"
      color="warning"
      icon="$edit"
      @click="showDeleteDialog"
    />
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-title>Редактирование задания</v-card-title>
        <edit-task-form :task="task"/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import editTaskForm from "@/components/editTaskForm";
export default {
  components: {
    editTaskForm
  },
  props: {
    task: Object,
    editButtonVisible: Boolean,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    showDeleteDialog() {
      this.dialog = true;
    },
    deleteTask() {
      this.$emit('delete-task', this.task);
      this.dialog = false;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.pulse-button {
  animation: pulse 1s infinite;
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
