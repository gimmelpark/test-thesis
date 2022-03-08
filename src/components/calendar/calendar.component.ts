import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import moment, {Moment} from "moment";

import {IEvent} from "@/model/event";
import {ICalendarWeek} from "@/service/calendarDay";

import {calculateMonthWeeks} from './helpers/calculateMonthWeeks'

import CalendarTable from "./components/calendar-table/calendar-table.vue";
import CalendarControl from "@/components/calendar/components/calendar-control/calendar-control.vue";

@Component({
  components: {
    CalendarTable,
    CalendarControl,
  }
})
export default class Calendar extends Vue {
  @Prop({required: true}) readonly events!: IEvent[]

  private today: Moment = null!
  private selectedMonth: [number, number] = [undefined!, undefined!]
  private weeks: ICalendarWeek[] = null!
  private animateDirection: boolean = true

  created() {
    this.initToday()
  }

  @Watch('selectedMonth', {deep: true})
  onMonthChange(newVal: [number, number], oldVal: [number, number]) {
    this.animateDirection = moment(newVal).isAfter(moment(oldVal))
    this.initMonth()
  }

  get animateInClass(): string {
    return `animate__animated animate__faster animate__fadeIn${this.animateDirection ? 'Right' : 'Left'}`
  }
  get animateOutClass(): string {
    return `animate__animated animate__faster animate__fadeOut${this.animateDirection ? 'Left' : 'Right'}`
  }

  private initToday(): void {
    this.today = moment()
    this.selectedMonth = [this.today.year(), this.today.month()]
  }

  private initMonth(): void {
    this.weeks = calculateMonthWeeks(this.selectedMonth, this.events)
  }

}