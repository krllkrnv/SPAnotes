<template>
  <div>
      <v-row align="top" no-gutters >
        <v-col>
          <v-sheet class="rounded"  style="height: 100%;">{{ task.name }}</v-sheet>
        </v-col>
        <v-divider
          color="grey-lighten-4"
          :thickness="10"
          vertical
        ></v-divider>
        <v-col >
          <v-sheet class="abc rounded" style="height: 100%;">
            <sub-task-list :subtasks="task.subtasks"></sub-task-list>
          </v-sheet>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import SubTaskList from "@/components/subTaskList";
export default {
  components: {SubTaskList},
  props: {
    task: Object,
    required: true
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
</style>
