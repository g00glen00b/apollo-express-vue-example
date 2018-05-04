<template>
  <QuestionList :questions="questions"></QuestionList>
</template>

<script>
  import QuestionList from './QuestionList';
  export default {
    components: {QuestionList},
    data () {
      return {
        questions:  [{
          "_id": "5aeb5c6d9be6ec471bcdff30",
          "title": "How do I create a question?",
          "firstPost": {
            "_id": "5aeb5c6d9be6ec471bcdff31",
            "voteCount": 0,
            "createdAt": "Thu Apr 20 2018 21:01:01 GMT+0200 (CEST)"
          }
        }, {
          "_id": "5aebefb06287f50673c1a308",
          "title": "How do we create answers?",
          "firstPost": {
            "_id": "5aebefb06287f50673c1a309",
            "voteCount": 0,
            "createdAt": "Fri May 04 2018 07:29:20 GMT+0200 (CEST)"
          }
        }]
      };
    }
  }
</script>

<style scoped>

</style>