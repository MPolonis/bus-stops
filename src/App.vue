<script setup lang="ts">
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';
import { computed } from 'vue';
import TabsMenu from './components/TabsMenu.vue';
const isLoading = computed(() => store.state.isLoading);
const error = computed(() => store.state.error);

const store = useStore();
store.dispatch('fetchStopsData');
</script>

<template>
    <div class="container bg-transparent p-0 pb-3">
        <h1 class="fw-semibold fs-4 mt-4">Timetable</h1>
    </div>
    <div class="container mt-3 w-100 p-0">
        <TabsMenu />
    </div>
    <div v-if="error" class="alert alert-danger m-3">
        {{ error }}
    </div>
    <div v-else-if="isLoading" class="d-flex justify-content-center p-4">
        <div class="spinner-border text-primary" role="status" />
        <div class="ms-2">Loading...</div>
    </div>
    <div v-else class="my-3 p-0">
        <RouterView />
    </div>
</template>
