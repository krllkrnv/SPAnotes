<!--
  Подзадача
 -->

<template>
  <div class="subtask">
    <v-checkbox v-model="subtask.status"
                :label="`${index + 1}. ${subtask.name}`"
                class="ma-0 pa-0"
                :disabled="disabledCheckbox"
                hide-details="true"
                on/>
  </div>
</template>

<script>
export default {
  props: {
    subtask: Object,
    index: Number,
    disabledCheckbox: Boolean,
    required: true
  },
}
</script>
