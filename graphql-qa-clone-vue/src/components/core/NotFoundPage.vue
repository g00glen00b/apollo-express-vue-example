<template>
  <div>
    <h1 class="page-title center">
      <i class="icon icon-activity"></i><br />
      Looks like you made a wrong turn,<br />
      the page you requested isn't available.<br />

      <at-button size="large" type="primary" hollow="true" icon="icon-home" v-on:click="openQuestions">
        Go back to the question overview
      </at-button>
    </h1>
  </div>
</template>

<script>
  export default {
    methods: {
      openQuestions () {
        this.$router.push({name: 'Questions'});
      }
    }
  }
</script>

<style scoped>
  .page-title {
    font-weight: 100;
    font-size: 4em;
  }

  .center {
    text-align: center;
  }
</style>