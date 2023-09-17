<template>
  <div>
    <v-container class="bg-blue-grey-lighten-4 rounded align-self-center mb-4">
      <div class="ma-1 pa-1">
        Список заданий
      </div>
      <v-btn prepend-icon="$plus" class="mr-2" color="surface-variant" @click="showDialog(true)">Добавить</v-btn>
      <v-btn prepend-icon="$edit" class="mr-2" color="surface-variant" @click="showDialog(true)">Изменить</v-btn>
      <v-btn prepend-icon="$delete" color="surface-variant" @click="showDialog(true)">Удалить</v-btn>
    </v-container>

    <dialog-window v-model:show="dialogVisible"></dialog-window>
  </div>
</template>
<script>
import DialogWindow from './DialogWindow.vue'; // Импортируйте компонент dialogWindow

export default {
  components: {
    DialogWindow // Зарегистрируйте компонент dialogWindow
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    showDialog(value) {
      this.dialogVisible = value;
    }
  }
};
</script>

<style scoped>

</style>
