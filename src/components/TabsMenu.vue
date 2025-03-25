<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const routeRegex = /(\/lines\/.*)|(\/$)/;
</script>

<template>
  <nav class="tabs-container">
    <ul class="nav">
      <li>
        <RouterLink to="/"
          :class="['h-100 d-flex align-items-center tab-menu nav-link fw-medium', { 'active border-bottom border-2 border-primary active-tab': route.path.match(routeRegex) }]">
          Bus Lines
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/stops" class="nav-link"
          :class="['h-100 d-flex align-items-center tab-menu nav-link fs-6 fw-medium', { 'active border-bottom border-2 border-primary active-tab': route.path === '/stops' }]">
          Stops
        </RouterLink>
      </li>
    </ul>

  </nav>
</template>
<style scoped>
.tabs-container {
  height: 64px;
  display: flex;
  padding: 0 24px;
}

.active-tab {
  color: #33373c;
}
</style>
