import { Component, Vue, Prop } from 'vue-property-decorator';
import moment from "moment";

import {ICalendarDay} from "@/service/calendarDay";
import {IEventWithMoment} from "@/model/event";

@Component
export default class CalendarCell extends Vue {
  @Prop({required: true}) readonly day!: ICalendarDay

  private eventsForShow: IEventWithMoment[] = null!
  private eventsForHidden: IEventWithMoment[] = null!

  created(): void {
    this.eventsForShow = this.day.data.length > 2 ? [this.day.data[0]] : this.day.data.slice(0, 2)
    this.eventsForHidden = this.day.data.length > 2 ? this.day.data.slice(1) : []
  }

  get isToday(): boolean {
    return this.day.moment.isSame(
      moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    )
  }
  get isBeforeToday(): boolean {
    return this.day.moment.isBefore(
      moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    )
  }
  get isWeekEnd(): boolean {
    return this.day.moment.isoWeekday() >= 6
  }
  get hiddenEventsCount(): number {
    return this.day.data.length >  2 ? this.day.data.length - 1 : 0
  }

  private getEventClass(event: IEventWithMoment): string {
    switch (event.type) {
      case 'success':
        return 'success'
      case 'warning':
        return 'yellow darken-2'
      case 'danger':
        return 'red darken-2 white--text'
      default:
        return ''
    }
  }

  private getEventText(event: IEventWithMoment): string {
    const timeString = event.moment.locale('ru').utcOffset(0).format('LT')
    return `${timeString} ${event.title}`
  }

}