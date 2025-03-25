<script setup lang="ts">
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';

import TabsMenu from './components/TabsMenu.vue';

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
    <div class="my-3 p-0">
        <RouterView />
    </div>
</template>
