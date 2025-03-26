<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

const stopTimes = computed(() => store.getters.getStopTimesData(route.params.stop));

</script>
<template>
  <div class="container-schedule px-0">
    <div v-if="!route.params.line" class="d-flex align-items-center justify-content-center empty-list">
      Please select the bus line first
    </div>
    <div v-else-if="!route.params.stop" class="d-flex align-items-center justify-content-center empty-list">
      Please select the bus stop first
    </div>
    <div v-else>
      <div class="ms-3 pt-3 fs-6 fw-semibold">Bus Stop: {{ route.params.stop }}</div>
      <div class="list-item border-bottom border-secondary-subtle d-flex align-items-center fw-semibold ps-3">
        Time
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li v-for="time in stopTimes" :key="time" class="list-item d-flex align-items-center list-group-item">{{ time }}
      </li>
    </ul>
  </div>
</template>