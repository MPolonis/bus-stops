export type Stop = {
  line: number,
  stop: string,
  order: number,
  time: string,
}

export type State = {
  stopsData: Stop[],
  isLoading: boolean,
  error: string | null,
  sortOrderOfStopsForLine: 'asc' | 'desc',
  sortOrderForAllStops: 'asc' | 'desc'
}

export const state: State = {
  stopsData: [],
  isLoading: false,
  error: null,
  sortOrderOfStopsForLine: 'asc',
  sortOrderForAllStops: 'asc'
}