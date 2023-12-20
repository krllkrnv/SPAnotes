<template>
  <div class="app">
    <v-app>
      <main-page
      />
    </v-app>
  </div>
</template>

<script>
import mainPage from "@/pages/mainPage";

export default {
  components: {mainPage},
  created() {
    this.$store.dispatch('MOCK_AND_SET')
  }
}
//</script>
