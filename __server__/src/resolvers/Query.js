import Question from '../models/Question';
import User from '../models/User';
import {promisify} from '../helpers';

const resolvers = {
  questions: (_, args) => promisify(Question.find({}).skip(args.query.offset).limit(args.query.limit)),
  question: (_, args) => promisify(Question.findById(args.id)),
  questionCount: () => promisify(Question.count()),
  user: (_, args) => promisify(User.findById(args.id))
};

export default resolvers;