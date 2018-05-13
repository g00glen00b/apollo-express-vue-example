<template>
  <QuestionEditor v-on:save-question="saveQuestion"></QuestionEditor>
</template>

<script>
  import QuestionEditor from './QuestionEditor';
  import {CreateQuestion} from './queries';

  export default {
    components: {QuestionEditor},
    data () {
      return {title: '', content: ''};
    },
    methods: {
      saveQuestion (question) {
        const input = {...question};
        input.authorId = '5aeb5bd99be6ec471bcdff2f'; // Dummy author ID
        this.$apollo.mutate({
          mutation: CreateQuestion,
          variables: {input}
        }).then(() => this.$router.push({name: 'Questions'}));
      }
    }
  }
</script>

<style scoped>
</style>