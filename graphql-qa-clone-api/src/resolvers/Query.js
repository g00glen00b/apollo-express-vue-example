import Question from '../models/Question';
import User from '../models/User';
import {promisify} from '../helpers';

const resolvers = {
  questions: (_, args) => promisify(Question.find({}).sort('-createdAt').skip(args.query.offset).limit(args.query.limit)),
  question: (_, args) => promisify(Question.findById(args.id)),
  questionCount: () => promisify(Question.count()),
  users: (_, args) => promisify(User.find({}).skip(args.query.offset).limit(args.query.limit)),
  user: (_, args) => promisify(User.findById(args.id)),
  userCount: () => promisify(User.count())
};

export default resolvers;