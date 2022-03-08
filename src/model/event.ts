import {Moment} from "moment";

export interface IEvent {
  id: number,
  date: string,
  title: string,
  type: 'success' | 'danger' | 'warning'
}

export interface IEventWithMoment extends IEvent{
  moment: Moment
}