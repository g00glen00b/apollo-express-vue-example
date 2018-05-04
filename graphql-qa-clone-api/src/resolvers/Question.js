import Post from '../models/Post';
import {promisify} from '../helpers';

const resolvers = {
  firstPost: question => promisify(Post.findById(question.firstPostId)),
  answers: question => promisify(Post.find({_id: {$in: question.answerIds}}))
};

export default resolvers;