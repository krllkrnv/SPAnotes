<template>
  <div class="subtask">
    <v-checkbox v-model="subtask.status" :label="`${index + 1}. ${subtask.name}`"
                class="ma-0 pa-0" disabled
                hide-details="true"
                on></v-checkbox>
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
