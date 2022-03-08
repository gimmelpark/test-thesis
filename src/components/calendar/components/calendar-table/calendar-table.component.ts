import { Component, Vue, Prop } from 'vue-property-decorator';

import {ICalendarWeek} from "@/service/calendarDay";

import CalendarCell from '../calendar-cell/calendar-cell.vue'

@Component({
  components: {
    CalendarCell,
  }
})
export default class CalendarTable extends Vue {
  @Prop({required: true}) readonly weeks!: ICalendarWeek[]
}