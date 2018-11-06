import PostModel from '../../../src/models/Post';
import User from '../../../src/resolvers/User';

test('posts resolver returns a list of all user posts', () => {
  const handler = {};
  const postIds = ['id-123', 'id-234'];
  const posts = [{_id: 'id-123'}, {_id: 'id-234'}];
  const query = {offset: 0, limit: 10};
  const findPost = PostModel.find = jest.fn().mockReturnValue(handler);
  handler.skip = jest.fn().mockReturnValue(handler);
  handler.limit = jest.fn().mockReturnValue(handler);
  handler.exec = jest.fn(cb => cb(null, posts));
  return User.posts({postIds}, {query}).then(results => {
    expect(results).toBe(posts);
    expect(findPost).toHaveBeenLastCalledWith(expect.objectContaining({_id: {$in: postIds}}));
    expect(handler.skip).toHaveBeenLastCalledWith(0);
    expect(handler.limit).toHaveBeenLastCalledWith(10);
  });
});

test('post count resolver returns the length of the post IDs', () => {
  const postIds = ['id-123', 'id-234', 'id-345'];
  expect(User.postCount({postIds})).toEqual(3);
});