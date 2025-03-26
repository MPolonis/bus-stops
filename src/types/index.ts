export type Stop = {
  line: number,
  stop: string,
  order: number,
  time: string,
}

export type State = {
  stopsData: Stop[],
  isLoading: boolean,
  error: string | null
}

export const state: State = {
  stopsData: [],
  isLoading: false,
  error: null
}