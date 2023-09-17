<!--
taskItem: {[
name: ...
subtasks: []
]
}

-->
<template>
  <div>
    <v-container
      class="bg-blue-grey-lighten-4"
    >
      <v-row align="top" no-gutters class="abc">
        <v-col>
          <v-sheet class="pa-2 ma-2 align-self-center" style="height: 90%;"> Hello there!!!</v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2" style="height: 90%;">ive physre?"</v-sheet>
        </v-col>
      </v-row>
      <v-row align="top" no-gutters class="abc">
        <v-col>
          <v-sheet class="pa-2 ma-2" style="height: 90%;">Hello there!!!</v-sheet>
        </v-col>
        <v-col >
          <v-sheet class="pa-2 ma-2" style="height: 90%;">ive you ain is there elf, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: Object,
  required: false
}
</script>

<style>
.abc {
  align-items: stretch; /* Растянуть по высоте */
  max-height: 115px; /* Начальная максимальная высота (скроет текст) */
  overflow: hidden; /* Скроет текст, который не помещается в максимальную высоту */
  transition: max-height 0.8s ease-in-out; /* Плавная анимация для свойства max-height */
}
.abc:hover {
  max-height: 500px; /* Максимальная высота при наведении (развернет текст) */
}
</style>
