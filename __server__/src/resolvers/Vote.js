import {promisify} from '../helpers';
import User from '../models/User';

const resolvers = {
  author: vote => promisify(User.findById(vote.userId))
};

export default resolvers;