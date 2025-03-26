import axios from "axios"
import { Commit } from "vuex"

export const fetchStopsData = async ({ commit }: { commit: Commit }) => {
  commit("setLoading", true);
  commit("setError", null);

  try {
    const response = await axios.get('http://localhost:3000/stops');
    commit("setStops", response.data);
  } catch (error) {
    commit("setError", "Failed to fetch stops data. Please try again later.");
    console.error(error);
  } finally {
    commit("setLoading", false);
  }
}
