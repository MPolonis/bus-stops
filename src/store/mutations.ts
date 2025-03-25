import { State, Stop } from "@/types";

export const setStops = (state: State, stops: Stop[]) => {
  state.stopsData = stops;
}