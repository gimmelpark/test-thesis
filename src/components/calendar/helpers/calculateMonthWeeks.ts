import moment, {Moment} from "moment";
import {ICalendarDay, ICalendarWeek} from "@/service/calendarDay";
import {IEvent, IEventWithMoment} from "@/model/event";

const filterData = (data: IEvent[], firstDay: Moment, lastDay: Moment): IEventWithMoment[] => {
  return data
    .map(el => ({...el, moment: moment(el.date)}))
    .filter(el => {
      return el.moment.isSameOrAfter(firstDay) &&
        el.moment.isSameOrBefore(lastDay.hour(23).minute(59).second(59).millisecond(999))
    })
    .sort((a, b) => a.moment.valueOf() - b.moment.valueOf())
}

const getDaysInMonth = (year: number, month: number, data: IEvent[]): ICalendarDay[] => {
  const firstDay = moment([year, month])
    .isoWeekday(1)
  const lastDay = moment([year, month])
    .add(1, 'month')
    .subtract(1, 'day')
    .isoWeekday(7)
  const thisMonthData = filterData(data, firstDay, lastDay)
  const currDay = firstDay.clone()
  const res = []
  while (currDay.isSameOrBefore(lastDay)) {
    res.push({
      moment: currDay.clone(),
      data: thisMonthData.filter(el => el.moment.format('DD-MM-YYYY') === currDay.format('DD-MM-YYYY'))
    })
    currDay.add(1, 'day')
  }
  return res
}

const getWeeks = (days: ICalendarDay[]): ICalendarWeek[] => {
  return days.reduce((acc: ICalendarWeek[], day: ICalendarDay) => {
    if (day.moment.isoWeekday() === 1) {
      return [...acc, {days: [day]}]
    }
    acc[acc.length - 1].days.push(day)
    return acc
  }, [])
}

export const calculateMonthWeeks = ([year, month]: [number, number], data: IEvent[]): ICalendarWeek[] => {
  return getWeeks(getDaysInMonth(year, month, data))
}