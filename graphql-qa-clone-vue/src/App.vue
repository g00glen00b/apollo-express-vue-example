<template>
  <div id="app">
    <div class="container">
      <SiteHeader></SiteHeader>
      <div class="inner-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/core/SiteHeader';

export default {
  components: {SiteHeader}
}
</script>

<style scoped>
  .inner-container {
    padding: 1em 0;
  }
</style>
