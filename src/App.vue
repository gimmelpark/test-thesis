<template>
  <v-app>
    <calendar v-if="eventsData" :events="eventsData"/>
  </v-app>
</template>

<script lang="ts" src="./App.component.ts"/>
