import { State } from "@/types"

export const getStopsData = (state: State) => {
  const allStops = state.stopsData.map((stop) => stop.stop)
  const sortedStops = [...new Set(allStops)].sort((a, b) => a.localeCompare(b))
  return sortedStops
}
export const getLinesData = (state: State): number[] => {
  const lines = state.stopsData.map((stop) => stop.line)
  const sortedLines = [...new Set(lines)].sort((a, b) => a - b)
  return sortedLines
}

export const getStopsByLine = (state: State) => (line: number) => {
  const stops = state.stopsData.filter((stop) => stop.line === line)
  const sortedStops = stops.sort((a, b) => a.order - b.order)
  return [...new Set(sortedStops.map((stop) => stop.stop))]
}

export const getStopTimesData = (state: State) => (stop: string) => {
  const stops = state.stopsData.filter((stopItem) => {
    return stopItem.stop === stop
  })

  const times = [...new Set(stops.map((stopItem) => stopItem.time))]
  const timesWithZeros = times.map((time) =>
    time.split(":")[0].length === 1 ? "0".concat(time) : time
  )
  return timesWithZeros.sort((prev, next) => prev.localeCompare(next))
}
