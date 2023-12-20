<!--
  Кнопка добавления, редактирования и удаления
 -->

<template>
  <div>
    <v-container
      class="bg-blue-grey-lighten-4 rounded align-self-center mb-4">
      <div class="header">
        Список заданий
      </div>
      <v-btn
        class="mr-2"
        color="surface-variant"
        prepend-icon="$plus"
        @click="showDialog"
      >
        Добавить
      </v-btn>
      <v-btn
        class="mr-2"
        color="surface-variant"
        prepend-icon="$edit"
        @click="showEditButtons"
      >
        Изменить
      </v-btn>
      <v-btn
        color="surface-variant"
        prepend-icon="$delete"
        @click="showDeleteButtons"
      >
        Удалить
      </v-btn>
    </v-container>
  </div>
</template>
<script>

export default {
  data(){
    return{
      // Добавил статусы, отображающие то, была ли нажата кнопка
    wasEditButtonPressed: false,
    wasDeleteButtonPressed: false,
    }
  },
  // При нажатии на кнопки изменяются статусы
  /*
  Нажатие на кнопку меняет соответсвующий статус
  для возможности при повторном нажатии на кнопку скрыть появившиеся элементы
   */
  methods: {
    showDialog() {
      this.$emit('pass-statuses', true, false, false)
    },
    showEditButtons() {
    if (!this.wasEditButtonPressed){
      this.$emit('pass-statuses', false, true, false)
    }
    else{
      this.$emit('pass-statuses', false, false, false)
    }
      this.wasEditButtonPressed = !this.wasEditButtonPressed;
      this.wasDeleteButtonPressed = false;

    },
    showDeleteButtons() {
      if (!this.wasDeleteButtonPressed){
        this.$emit('pass-statuses', false, false, true)
      }
      else {
        this.$emit('pass-statuses', false, false, false)
      }
      this.wasDeleteButtonPressed = !this.wasDeleteButtonPressed;
      this.wasEditButtonPressed = false;
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
</style>
