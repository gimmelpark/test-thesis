import { Component, Vue, Prop } from 'vue-property-decorator';
import moment from "moment";


@Component
export default class CalendarControl extends Vue {
  @Prop({required: true}) readonly value!: [number, number]

  get valueString(): string {
    const valueMoment = moment(this.value)
    const format = valueMoment.year() === moment().year() ? 'MMMM' : 'MMMM YYYY'
    return valueMoment.locale('ru').format(format)
  }

  private onPrevBtnClick(): void {
    this.changeMonth(this.switchOneMonth(false))
  }
  private onNextBtnClick(): void {
    this.changeMonth(this.switchOneMonth(true))
  }
  private switchOneMonth(direction: boolean): [number, number] {
    const valueMoment = moment(this.value)
    if (direction) {
      valueMoment.add(1, 'month')
    } else {
      valueMoment.subtract(1, 'month')
    }
    return [valueMoment.year(), valueMoment.month()]
  }

  private changeMonth(value: [number, number]): void {
    this.$emit('input', value)
  }
}