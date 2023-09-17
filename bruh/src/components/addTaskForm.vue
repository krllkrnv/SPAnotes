<template>
  <v-form @submit.prevent="pushToStorage">
    <v-text-field
      v-model="task.name"
      :rules="rules"
      label="First name"
    ></v-text-field>
    <v-btn type="pushToStorage" block class="mt-2">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
data(){
  return{
    task: {
      name: '',
      subtasks: []
    },
    rules: [
      value => {
        if (value) return true

        return 'Введите название задачи'
      },
    ]
  }
},
  methods: {
  pushToStorage(){
    this.$store.commit('SET_TASKS', this.task)
    this.task = {
      name: '',
      subtasks: []
    }
  }
  }
}
</script>

<style scoped>

</style>
