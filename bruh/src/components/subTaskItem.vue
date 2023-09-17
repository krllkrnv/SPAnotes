<!--
 subtaskItem: [
 name: ...,
 status: boolean,
 ]
 -->
<template>
  <div class="subtask">
    <input v-model="subtask.status" type="checkbox">
    {{ subtask.name }}: {{ subtask.status }}
  </div>
</template>

<script>
export default {
  props: {
    subtask: Object,
    required: true
  },
}
</script>

<style lang="scss" scoped>

</style>
