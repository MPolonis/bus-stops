<script setup lang="ts">
import LinesList from './LinesList.vue';
import BusStopsList from './BusStopsList.vue';
import TimeList from './TimeList.vue';
</script>
<template>
  <div class="container">
    <LinesList />
  </div>
  <div class="container bg-transparent px-0">
    <div class="content-container">
      <div class="content-container-item">
        <BusStopsList />
      </div>
      <div class="content-container-item">
        <TimeList class="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-container-item {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 8px;

  &:not(:last-child) {
    margin-right: 21px;
  }
}
</style>