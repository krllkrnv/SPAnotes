<!--
  Список задач
 -->

<template>
  <v-container
    class="bg-blue-grey-lighten-4 rounded align-self-center">
    <div v-for="task in tasks">
      <task-item
        :show-delete-buttons="showDeleteButtons"
        :show-edit-buttons="showEditButtons"
        :task="task" class="pa-1"
      />
    </div>
  </v-container>

</template>

<script>
import taskItem from "@/components/taskItem";

export default {
  components: {taskItem},
  props: {
    tasks: Array,
    showEditButtons: Boolean,
    showDeleteButtons: Boolean,
  },
}
</script>
