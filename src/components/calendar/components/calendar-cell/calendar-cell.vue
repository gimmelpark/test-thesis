<template>
  <div
    class="cell"
    :class="{today: isToday, 'before-today': isBeforeToday, weekend: isWeekEnd}"
  >
    <div
      class="cell-date mt-1 ml-2 font-weight-bold"
    >{{day.moment.date()}}</div>
    <div class="d-flex flex-column align-stretch px-2">
      <v-tooltip
        bottom
        v-for="(event, i) in eventsForShow"
        :key="i"
        :color="getEventClass(event)"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-on="on"
            v-bind="attrs"
            small
            class="mt-1"
            :class="getEventClass(event)"
          >
            <span class="cell-chip">{{getEventText(event)}}</span>
          </v-chip>
        </template>
        <span>{{getEventText(event)}}</span>
      </v-tooltip>

      <v-menu
        open-on-hover
        bottom
        offset-y
      >
        <template #activator="{on, attrs}">
          <v-chip
            v-on="on"
            v-bind="attrs"
            small
            v-if="hiddenEventsCount"
            class="mt-1"
          >Ещё {{hiddenEventsCount}}</v-chip>
        </template>
        <v-card
          class="d-flex flex-column align-stretch px-2 pb-1"
          width="120"
        >
          <v-tooltip
            bottom
            v-for="(event, i) in eventsForHidden"
            :key="i"
            :color="getEventClass(event)"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                v-on="on"
                v-bind="attrs"
                small
                class="mt-1 cell-menu-chip"
                :class="getEventClass(event)"
              >
                <span>{{getEventText(event)}}</span>
              </v-chip>
            </template>
            <span>{{getEventText(event)}}</span>
          </v-tooltip>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script src="./calendar-cell.component.ts"/>

<style scoped lang="scss">
  .cell {
    height: 100px;
    border-radius: 8px;
    background-color: #ffffff;

    .cell-date {
      font-weight: bold;
      color: #4b4b4b;
    }

    .cell-chip {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .cell.weekend {
    .cell-date {
      color: #0003e7;
    }
  }
  .cell.today {
    border: 1px solid #464646;

    .cell-date {
      color: #2dc001;
    }
  }
  .cell.before-today {
    background-color: #d0d0d0;
  }

  .cell-menu-chip {
    width: 100px;

    span {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>