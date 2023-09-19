<template>
  <v-container class="bg-blue-grey-lighten-4 rounded align-self-center">
    <div v-for="task in tasks">
      <task-item :task="task" class="pa-1"></task-item>
    </div>
  </v-container>

</template>

<script>
import taskItem from "@/components/taskItem";

export default {
  components: {taskItem},
  props: {
    tasks: Array,
    required: true
  },
}
</script>

<style lang="scss" scoped>

</style>
