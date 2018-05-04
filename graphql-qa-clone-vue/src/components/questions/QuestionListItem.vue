<template>
  <at-card>
    <div class="row">
      <div class="col-2">
        {{question.firstPost.voteCount}}
      </div>
      <div class="col-10">
        {{question.title}}<br />
        <NewBadge :date="question.firstPost.createdAt"></NewBadge>
      </div>
    </div>
  </at-card>
</template>

<script>
  import NewBadge from '../core/NewBadge';
  export default {
    components: {NewBadge},
    props: {
      question: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style scoped>
  .at-card {
    margin: .7em 0;
  }
</style>