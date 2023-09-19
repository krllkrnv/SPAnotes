<template>
  <div v-for="(item, index) in subtasks">
    <sub-task-item
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
    required: true
  }
}
</script>

<style lang="scss" scoped>

</style>
