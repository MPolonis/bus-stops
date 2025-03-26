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

export const toggleSortOrderOfStopsForLine = (state: State) => {
  state.sortOrderOfStopsForLine = state.sortOrderOfStopsForLine === 'asc' ? 'desc' : 'asc';
}

export const toggleSortOrderForAllStops = (state: State) => {
  state.sortOrderForAllStops = state.sortOrderForAllStops === 'asc' ? 'desc' : 'asc';
}