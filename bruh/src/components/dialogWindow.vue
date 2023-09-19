<template>
  <div class="dialog" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import addTaskForm from '@/components/addTaskForm.vue';
import {mapGetters} from "vuex";

export default {
  components: {
    addTaskForm
  },
  name: 'dialogWindow',
  methods: {
    hideDialog() {
      this.$store.commit('SET_ADD_TASK_DIALOGUE_STATUS');
    }
  },
  computed: {
    ...mapGetters(['GET_ADD_TASK_DIALOGUE_STATUS']),
  }
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 5px;
  min-height: 50px;
  min-width: 500px;
}
</style>
