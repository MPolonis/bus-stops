import { describe, it, expect } from "vitest"
import {
  getStopsData,
  getLinesData,
  getStopsByLine,
  getStopTimesData,
} from "@/store/getters"

describe("Store Getters", () => {
  const mockStopsData = [
    { line: 102, stop: "Chełmska", order: 20, time: "14:15" },
    { line: 102, stop: "Chełmska", order: 20, time: "19:31" },
    { line: 102, stop: "Łobzów SKA", order: 4, time: "16:48" },
    { line: 102, stop: "Piastowska", order: 11, time: "15:21" },
    { line: 111, stop: "Wyciąże", order: 27, time: "12:05" },
    { line: 112, stop: "Bogucianka", order: 19, time: "13:45" },
    { line: 106, stop: "Skotniki", order: 12, time: "12:41" },
  ]

  describe("getStopsData", () => {
    it("returns unique sorted stops", () => {
      const state = { stopsData: mockStopsData }
      expect(getStopsData(state)).toEqual([
        "Bogucianka",
        "Chełmska",
        "Łobzów SKA",
        "Piastowska",
        "Skotniki",
        "Wyciąże",
      ])
    })
  })

  describe("getLinesData", () => {
    it("returns unique sorted lines", () => {
      const state = { stopsData: mockStopsData }
      expect(getLinesData(state)).toEqual([102, 106, 111, 112])
    })
  })

  describe("getStopsByLine", () => {
    it("returns stops for specific line in correct order", () => {
      const state = { stopsData: mockStopsData }
      const getStops = getStopsByLine(state)
      expect(getStops(102)).toEqual(["Łobzów SKA", "Piastowska", "Chełmska"])
    })
  })

  describe("getStopTimesData", () => {
    it("returns sorted unique times for specific stop", () => {
      const state = { stopsData: mockStopsData }
      const getTimes = getStopTimesData(state)
      expect(getTimes("Chełmska")).toEqual(["14:15", "19:31"])
    })

    it("returns empty array for non-existent stop", () => {
      const state = { stopsData: mockStopsData }
      const getTimes = getStopTimesData(state)
      expect(getTimes("NonExistentStop")).toEqual([])
    })
  })
})
