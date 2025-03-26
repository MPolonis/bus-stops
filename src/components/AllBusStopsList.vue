<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import sortIcon from '../assets/sort.svg';
import searchIcon from '../assets/search.svg';
const store = useStore();
const allStops = computed(() => store.getters.getStopsData);
const sortOrder = computed(() => store.state.sortOrderForAllStops);
const onSortClick = () => store.commit('toggleSortOrderForAllStops');
const searchValue = ref('');
const isSearchValueEmpty = computed(() => searchValue.value === '');


function filterStops(newValue: string) {
  const filteredStops = allStops.value.filter((stop: string) => stop.toLowerCase().startsWith(newValue.toLowerCase()));
  return filteredStops;
}
</script>
<template>
  <div class="container p-0">
    <div class="input-container">
      <input v-model="searchValue" type="text" placeholder="Search..." class="input-search" />
      <img v-if="isSearchValueEmpty" class="icon-search" :src="searchIcon" alt="search" />
    </div>
    <div class="list-item d-flex align-items-center fw-semibold ps-3">
      Bus Stops
      <img class="ps-1 sort-icon" :class="{ 'sort-desc': sortOrder === 'desc' }" :src="sortIcon" alt="sort" @click="onSortClick" />
    </div>
    <ul class="list-group list-group-flush">
      <li v-for="stop in filterStops(searchValue)" :key="stop" role="button"
        :class="['list-item d-flex align-items-center list-group-item']">
        {{ stop }}</li>
    </ul>
  </div>
</template>
<style scoped>
.input-container {
  position: relative;
  width: 288px;
  height: 40px;
  padding: 8px;
}

.icon-search {
  position: absolute;
  top: 20px;
  right: 16px;
  z-index: 1;
}

.input-search {
  width: 288px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
  font-size: 12px;
  font-weight: 400;
  padding: 12px 16px;
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