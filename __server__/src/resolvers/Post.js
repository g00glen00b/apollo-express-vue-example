import {promisify} from '../helpers';
import User from '../models/User';
import Question from '../models/Question';

const resolvers = {
  author: post => promisify(User.findById(post.authorId)),
  voteCount: post => post.votes.map(post => post.status === 'UP' ? 1 : -1).reduce((a, b) => a + b),
  question: post => promisify(Question.findById(post.questionId))
};

export default resolvers;