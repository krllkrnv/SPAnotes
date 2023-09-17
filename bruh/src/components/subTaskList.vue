<template>
  <div v-for="(item, index) in subtasks">
    <sub-task-item
      :index="index"
      :subtask='item'
    ></sub-task-item>
  </div>
</template>
<!--maybe I should parse data through vuex, and for parsing data down - props
 I think I can change that later.
 -->
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
