<template>
  <div class="ma-3">
    <calendar-control v-model="selectedMonth"/>
    <transition
      mode="out-in"
      :enter-active-class="animateInClass"
      :leave-active-class="animateOutClass"
    >
      <calendar-table :weeks="weeks" :key="JSON.stringify(selectedMonth)"/>
    </transition>
  </div>
</template>

<script src="./calendar.component.ts"/>
