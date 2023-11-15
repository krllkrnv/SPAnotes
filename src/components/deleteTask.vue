<!--
 Удаление задачи
 -->

<template>
  <div>
    <v-btn
      v-show="deleteButtonVisible"
      class="pulse-button"
      color="error"
      icon="$delete"
      @click="showDeleteDialog"
    />
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="card-title">Подтвердите удаление задачи {{ task.name }}</v-card-title>
        <v-card-actions class="justify-center d-flex">
          <v-btn color="primary" @click="closeDialog">Отмена</v-btn>
          <v-btn color="error" @click="deleteTask">Удалить</v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    deleteButtonVisible: Boolean,
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
.card-title{
  text-align: center;
}
</style>
