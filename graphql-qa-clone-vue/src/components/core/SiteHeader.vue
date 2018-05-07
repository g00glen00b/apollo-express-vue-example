<template>
  <at-menu mode="horizontal" router>
    <at-menu-item name="questions" :to="{name: 'Questions'}">
      <i class="icon icon-home"></i> Questions
    </at-menu-item>
    <at-menu-item name="users" :to="{name: 'Users'}">
      <i class="icon icon-users"></i> Users
    </at-menu-item>
  </at-menu>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>