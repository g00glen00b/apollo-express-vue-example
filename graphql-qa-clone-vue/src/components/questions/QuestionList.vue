<template>
  <div>
    <QuestionListItem :question="question" v-for="question in questions" :key="question._id"></QuestionListItem>
  </div>
</template>

<script>
  import QuestionListItem from './QuestionListItem';

  export default {
    components: {QuestionListItem},
    props: {
      questions: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>