import gql from 'graphql-tag';

export const AllQuestions = gql`
  query AllQuestions($query: Pagination!) {
    questionCount
    questions(query: $query) {
      _id
      title
      firstPost {
        _id
        voteCount
      }
    }
  }  
`;