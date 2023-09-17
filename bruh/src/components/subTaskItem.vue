<!--
 subtaskItem: [
 name: ...,
 status: boolean,
 ]
 -->
<template>
  <div class="subtask">
<v-checkbox  class="ma-0 pa-0" hide-details="true"
    on disabled
  v-model="subtask.status"
  :label="`${index + 1}. ${subtask.name}`"></v-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    subtask: Object,
    index: Number,
    required: true
  },
}
</script>

<style lang="scss" scoped>

</style>
