import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import StopsAndTimeSection from "@/components/StopsAndTimeSection.vue"
import BusStopsList from "@/components/BusStopsList.vue"
import TimeList from "@/components/TimeList.vue"
import AllBusStopsList from "@/components/AllBusStopsList.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: StopsAndTimeSection,
    children: [
      {
        path: "lines/:line",
        name: "line",
        component: BusStopsList,
        props: true,
        children: [
          {
            path: ":stop",
            name: "time",
            component: TimeList,
            props: true,
          },
        ],
      },
    ],
  },
  {
    path: "/stops",
    name: "stops",
    component: AllBusStopsList,
  },
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
