import { Component, Vue } from 'vue-property-decorator';

import Calendar from "@/components/calendar/calendar.vue";
import {GET_EVENTS} from "@/service/events";
import {IEvent} from "@/model/event";

@Component({
  components: {
    Calendar,
  },
})
export default class App extends Vue {
  created() {
    GET_EVENTS().then(r => {
      this.eventsData = r.data
    })
  }

  private eventsData: IEvent[] | null = null
}