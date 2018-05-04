import Post from '../models/Post';
import {promisify} from '../helpers';

const resolvers = {
  posts: (user, args) => promisify(Post.find({_id: {$in: user.postIds}}).skip(args.query.offset).limit(args.query.limit)),
  postCount: user => user.postIds.length
};

export default resolvers;