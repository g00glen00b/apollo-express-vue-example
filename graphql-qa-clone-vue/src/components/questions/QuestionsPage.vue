<template>
  <div>
    <h1 class="page-title">Questions</h1>
    <QuestionList :questions="questions"></QuestionList>
    <at-pagination :total="questionCount" show-total></at-pagination>
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
          return {query: {offset: 0, limit: 10}}
        }
      },
      questionCount: {
        query: AllQuestions,
        variables () {
          return {query: {offset: 0, limit: 10}}
        }
      }
    },
    components: {QuestionList},
    data () {
      return {
        questions: [],
        questionCount: 0
      };
    }
  }
</script>

<style scoped>
  .page-title {
    font-weight: 300;
    font-size: 2em;
  }
</style>