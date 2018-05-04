<template>
  <span>
    <at-tag v-if="isNew" color="primary">New question</at-tag>
  </span>
</template>

<script>
  import moment from 'moment';

  export default {
    props: {
      date: {
        required: true,
        type: String
      }
    },

    computed: {
      isNew () {
        return moment(this.date).isAfter(moment().subtract(1, 'week'));
      }
    }
  }
</script>

<style scoped>

</style>