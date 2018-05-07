<template>
  <div class="card-wrapper">
    <at-card>
      <div class="row">
        <div class="col-2">
          {{question.firstPost.voteCount}}
        </div>
        <div class="col-10">
          {{question.title}}<br />
          <at-tag v-if="isNew" color="primary">New question</at-tag>
        </div>
      </div>
    </at-card>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    computed: {
      isNew () {
        return moment(this.question.firstPost.createdAt).isAfter(moment().subtract(1, 'day'));
      }
    },
    props: {
      question: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style scoped>
  .card-wrapper {
    margin: .7em 0;
  }
</style>