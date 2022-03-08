import {Moment} from "moment";
import {IEventWithMoment} from "@/model/event";

export interface ICalendarDay {
  moment: Moment,
  data: Array<IEventWithMoment>
}

export interface ICalendarWeek {
  days: Array<ICalendarDay>
}