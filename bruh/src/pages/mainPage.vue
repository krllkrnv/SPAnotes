<template>
  <div>
<tool-bar class="mt-4"></tool-bar>
<task-list
:tasks="TASKS"></task-list>
  </div>
</template>

<script>
import taskList from "@/components/taskList";
import toolBar from "@/components/toolBar";
import {mapGetters} from "vuex";

export default {
  components: {taskList, toolBar},
  computed: {
    ...mapGetters(['TASKS']),
  },

}
</script>

<style lang="scss" scoped>

</style>
