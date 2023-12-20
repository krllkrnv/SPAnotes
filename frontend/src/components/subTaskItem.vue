<!--
  Подзадача
 -->

<template>
  <div class="subtask">
    <v-checkbox v-model="subtask.status"
                :disabled="true"
                :label="`${index + 1}. ${subtask.name}`"
                class="ma-0 pa-0"
                hide-details="true"
                on
    />
  </div>
</template>

<script>
export default {
  props: {
    subtask: {
      type: Object,
      required: true
    },
    index: Number,
  },
}
</script>
