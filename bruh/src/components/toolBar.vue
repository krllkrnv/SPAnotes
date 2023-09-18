<template>
  <div>
    <v-container class="bg-blue-grey-lighten-4 rounded align-self-center mb-4">
      <div class="ma-1 pa-1">
        Список заданий
      </div>
      <v-btn prepend-icon="$plus" class="mr-2" color="surface-variant" @click="showDialog">Добавить</v-btn>
      <v-btn prepend-icon="$edit" class="mr-2" color="surface-variant" @click="showDialog">Изменить</v-btn>
      <v-btn prepend-icon="$delete" color="surface-variant" @click="showDialog">Удалить</v-btn>
    </v-container>

    <dialog-window v-if="dialogVisible"></dialog-window>
  </div>
</template>
<script>
import DialogWindow from './DialogWindow.vue';
import { mapGetters } from "vuex";

export default {
  components: {
    DialogWindow
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  watch: {
    '$store.getters.GET_ADD_TASK_DIALOGUE_STATUS': function (newVal) {
      this.dialogVisible = newVal;
    }
  },
  methods: {
    showDialog() {
      this.$store.commit('SET_ADD_TASK_DIALOGUE_STATUS');
    },
    hideDialog() {
      this.$store.commit('SET_ADD_TASK_DIALOGUE_STATUS');
    }
  },
  computed: {
    ...mapGetters(['GET_ADD_TASK_DIALOGUE_STATUS']),
  }
};
</script>

<style scoped>

</style>
