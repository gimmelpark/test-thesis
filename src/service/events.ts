import axios, {AxiosPromise, AxiosResponse} from "axios";
import {IEvent} from "@/model/event";

const API_URL = 'http://localhost:3000/events'

export const GET_EVENTS = (): AxiosPromise<IEvent[]> => axios.get(API_URL)