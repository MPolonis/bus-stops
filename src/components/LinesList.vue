<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const store = useStore();
const router = useRouter();
const route = useRoute();

const lines = computed<number[]>(() => store.getters.getLinesData);
const onLineClick = (line: number) => router.push({ name: 'line', params: { line } });
</script>

<template>
  <h2 class="fs-6 pt-4 fw-semibold">Select Bus Line</h2>
  <div class="py-4 d-flex flex-wrap">
    <button v-for="line in lines" :key="line" @click="onLineClick(line)" type="button"
      :class="['btn btn-primary d-flex align-items-center justify-content-center line-button me-2 mb-2', { 'active': route.params.line === line.toString() }]">
      {{ line }}
    </button>
  </div>
</template>

<style scoped>
.line-button {
  width: 54px;
  height: 32px;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #1952E1;
  border: none;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
}

.line-button.active {
  background-color: #2E3E6E;
}
</style>