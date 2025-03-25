import axios from "axios"
import { Commit } from "vuex"

export const fetchStopsData = async ({ commit }: { commit: Commit }) => {
  await axios
    .get('http://localhost:3000/stops')
    .then((res) => {
      commit("setStops", res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
