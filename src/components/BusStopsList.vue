<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

import sortIcon from '../assets/sort.svg';

const route = useRoute();
const store = useStore();
const router = useRouter();
const lineStops = computed(() => store.getters.getStopsByLine(parseInt(route.params.line as string)));
const sortOrder = computed(() => store.state.sortOrderOfStopsForLine);

const onStopClick = (stop: string) => router.push({ name: 'time', params: { stop } });
const onSortClick = () => store.commit('toggleSortOrderOfStopsForLine');
</script>
<template>
  <div class="container-schedule px-0 ">
    <div v-if="!route.params.line" class=" empty-list d-flex align-items-center justify-content-center">
      Please select the bus line first
    </div>
    <div v-else>
      <div class="ms-3 pt-3 fs-6 fw-semibold">Bus Line: {{ route.params.line }}</div>
      <div class="list-item border-bottom border-secondary-subtle d-flex align-items-center fw-semibold ps-3">
        Bus Stops
        <img class="ps-1 sort-icon" :class="{ 'sort-desc': sortOrder === 'desc' }" :src="sortIcon" alt="sort" @click="onSortClick" />
      </div>
    </div>
    <ul class=" list-group list-group-flush">
      <li v-for="stop in lineStops" :key="stop" role="button"
        :class="['list-item d-flex align-items-center list-group-item list-group-item-action', { 'stop-active': route.params.stop === stop }]"
        @click="onStopClick(stop)">
        {{ stop }}</li>
    </ul>
  </div>
</template>
<style scoped>
.stop-active,
.stop-active:hover {
  color: #1952E1;
}

.sort-icon {
  cursor: pointer;
  transition: transform 0.2s ease;
  transform-origin: center;
}

.sort-desc {
  transform: scaleY(-1);
}
</style>