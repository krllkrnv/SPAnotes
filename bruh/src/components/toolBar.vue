<template>
  <div>
    <v-container class="bg-blue-grey-lighten-4 rounded align-self-center mb-4">
      <div class="header">
        Список заданий
      </div>
      <v-btn class="mr-2" color="surface-variant" prepend-icon="$plus" @click="showDialog">Добавить</v-btn>
      <v-btn class="mr-2" color="surface-variant" prepend-icon="$edit" @click="showEditButtons">Изменить</v-btn>
      <v-btn color="surface-variant" prepend-icon="$delete" @click="showDeleteButtons">Удалить</v-btn>
    </v-container>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  methods: {
    showDialog() {
      this.$store.commit('SET_ADD_TASK_DIALOGUE_STATUS');
      this.$store.commit('SET_EDIT_TASK_DIALOGUE_STATUS_FALSE');
      this.$store.commit('SET_DELETE_TASK_DIALOGUE_STATUS_FALSE');
    },
    hideDialog() {
      this.$store.commit('SET_ADD_TASK_DIALOGUE_STATUS');
      this.showAdd = this.$store.getters.GET_ADD_TASK_DIALOGUE_STATUS
    },
    showEditButtons() {
      this.$store.commit('SET_EDIT_TASK_DIALOGUE_STATUS')
      this.$store.commit('SET_DELETE_TASK_DIALOGUE_STATUS_FALSE');
    },
    showDeleteButtons() {
      this.$store.commit('SET_DELETE_TASK_DIALOGUE_STATUS')
      this.$store.commit('SET_EDIT_TASK_DIALOGUE_STATUS_FALSE');
    },
  },
  computed: {
    ...mapGetters(['GET_ADD_TASK_DIALOGUE_STATUS']),
  }
};
</script>

<style scoped>
.header{
  margin-bottom: 10px;
}
</style>
