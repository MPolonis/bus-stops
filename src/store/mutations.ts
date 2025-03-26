import { State, Stop } from "@/types";

export const setStops = (state: State, stops: Stop[]) => {
  state.stopsData = stops;
}

export const setLoading = (state: State, isLoading: boolean) => {
  state.isLoading = isLoading;
}

export const setError = (state: State, error: string | null) => {
  state.error = error;
}