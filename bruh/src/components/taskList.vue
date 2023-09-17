<template>
  <div v-for="task in tasks">
    {{ task }}
  </div>
</template>

<script>

export default {
  props: {
    tasks: Array,
    required: true
  }
}
</script>

<style lang="scss" scoped>

</style>
