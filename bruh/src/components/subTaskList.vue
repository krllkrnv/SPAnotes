<template>
  <div v-for="subtask in subtasks">
    <sub-task-item
      :subtask='subtask'
    ></sub-task-item>
  </div>
</template>
<!--maybe I should parse data through vuex, and for parsing data down - props
 I think I can change that later.
 -->
<script>
import SubTaskItem from "@/App.vue";

export default {
  components: {SubTaskItem},
  props: {
    subtasks: Array,
    required: true
  }
}
</script>

<style lang="scss" scoped>

</style>
