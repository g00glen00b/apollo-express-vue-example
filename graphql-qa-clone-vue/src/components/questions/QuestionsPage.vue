<template>
  <div>
    <h1 class="page-title">Questions</h1>
    <QuestionList :questions="questions"></QuestionList>
    <at-pagination :total="questionCount" show-total v-on:page-change="updateOffset"></at-pagination>
  </div>
</template>

<script>
  import QuestionList from './QuestionList';
  import {AllQuestions} from './queries';

  export default {
    apollo: {
      questions: {
        query: AllQuestions,
        variables () {
          return {query: {offset: this.offset, limit: 10}}
        }
      },
      questionCount: {
        query: AllQuestions,
        variables () {
          return {query: {offset: this.offset, limit: 10}}
        }
      }
    },
    components: {QuestionList},
    data () {
      return {
        offset: 0,
        questions: [],
        questionCount: 0
      };
    },
    methods: {
      updateOffset (pageNumber) {
        this.offset = (pageNumber - 1) * 10;
      }
    }
  }
</script>

<style scoped>
  .page-title {
    font-weight: 300;
    font-size: 2em;
  }
</style>