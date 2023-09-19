<template>
  <div>
    <tool-bar class="mt-4"></tool-bar>
    <dialog-window v-if="dialogVisible">
      <add-task-form v-if="dialogVisible"></add-task-form>
    </dialog-window>

    <task-list
      :tasks="TASKS"></task-list>
  </div>
</template>

<script>
import taskList from "@/components/taskList";
import toolBar from "@/components/toolBar";
import dialogWindow from "@/components/dialogWindow";
import addTaskForm from "@/components/addTaskForm";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      showAdd: this.$store.getters.GET_ADD_TASK_DIALOGUE_STATUS,
      dialogVisible: false,
    }
  },
  watch: {
    '$store.getters.GET_ADD_TASK_DIALOGUE_STATUS': function (newVal) {
      this.dialogVisible = newVal;
    }
  },
  components: {taskList, toolBar, dialogWindow, addTaskForm},
  computed: {
    ...mapGetters(['TASKS']),
    ...mapGetters(['GET_ADD_TASK_DIALOGUE_STATUS']),

  },

}
</script>

<style lang="scss" scoped>

</style>
