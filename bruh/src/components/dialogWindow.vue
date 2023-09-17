<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot><add-task-form></add-task-form>
      </slot>
    </div>
  </div>
</template>

<script>
import addTaskForm from '@/components/addTaskForm.vue';
export default {
  components:{
    addTaskForm
  },
  name: 'dialogWindow',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog(){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Задний фон с небольшой прозрачностью */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Установите высокий z-index */
}
.dialog__content{
  margin: auto;
  background: white;
  border-radius: 5px;
  min-height: 50px;
  min-width: 300px;
}
</style>
