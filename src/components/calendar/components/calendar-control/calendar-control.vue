<template>
  <div class="control d-flex align-center justify-space-between">
    <v-btn
      icon
      @click="onPrevBtnClick"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <span class="px-2">{{valueString}}</span>
    <v-btn
      icon
      @click="onNextBtnClick"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script src="./calendar-control.component.ts"/>

<style scoped>
.control {
  width: 200px;
}
</style>