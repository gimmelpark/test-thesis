<template>
  <div class="calendar">
    <div
      v-if="weeks && weeks.length"
      class="d-flex justify-space-around px-2 font-weight-bold grey--text"
    >
      <div
        v-for="(day, j) in weeks[0].days"
        :key="j"
      >{{day.moment.locale('ru').format('dd')}}</div>
    </div>
    <div
      v-for="(week, i) in weeks"
      :key="i"
      class="calendar__week px-2"
    >
      <calendar-cell
        v-for="(day, j) in week.days"
        :key="j"
        :day="day"
        class="mb-2"
      />
    </div>
  </div>
</template>

<script src="./calendar-table.component.ts"/>

<style scoped lang="scss">
  .calendar {
    background-color: #efefef;
    width: 900px;

    &__week {
      display: grid;
      grid-template-columns: repeat(7, 120px);
      grid-gap: 7px;

      &__day {
        height: 50px;
        border: thin solid #111111;
      }
    }
  }
</style>