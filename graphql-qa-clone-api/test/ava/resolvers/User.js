import {test} from 'ava';
import * as sinon from 'sinon';
import PostModel from '../../../src/models/Post';
import User from '../../../src/resolvers/User';

test('posts resolver returns a list of all user posts', t => {
  const handler = {};
  const postIds = ['id-123', 'id-234'];
  const posts = [{_id: 'id-123'}, {_id: 'id-234'}];
  const query = {offset: 0, limit: 10};
  const findPost = PostModel.find = sinon.stub().returns(handler);
  handler.skip = sinon.stub().returns(handler);
  handler.limit = sinon.stub().returns(handler);
  handler.exec = sinon.stub().returns(handler);
  const p = User.posts({postIds}, {query}).then(results => {
    t.is(results, posts);
    t.is(findPost.lastCall.args[0]['_id']['$in'], postIds);
    t.is(handler.skip.lastCall.args[0], 0);
    t.is(handler.limit.lastCall.args[0], 10);
  });
  handler.exec.callArgWith(0, null, posts);
  return p;
});

test('post count resolver returns the length of the post IDs', t => {
  const postIds = ['id-123', 'id-234', 'id-345'];
  t.is(User.postCount({postIds}), 3);
});