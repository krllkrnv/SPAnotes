<template>
  <div v-for="(item, index) in subtasks">
    <sub-task-item
      :disabled-checkbox="checkbox_status"
      :index="index"
      :subtask='item'
    ></sub-task-item>
  </div>
</template>

<script>
import subTaskItem from "@/components/subTaskItem";

export default {
  components: {subTaskItem},
  props: {
    subtasks: Array,
    checkbox_status: Boolean,
    required: true
  }
}
</script>

<style lang="scss" scoped>

</style>
