import {test} from 'ava';
import PostModel from '../../../src/models/Post';
import Question from '../../../src/resolvers/Question';
import * as sinon from 'sinon';

test('first post resolver returns the first post by its identifier', t => {
  const exec = sinon.stub();
  const post = {_id: 'id-123'};
  const findPostById = PostModel.findById = sinon.stub().returns({exec});
  const p = Question.firstPost({firstPostId: 'id-123'}).then(result => {
    t.is(result, post);
    t.is(findPostById.lastCall.args[0], 'id-123');
  });
  exec.callArgWith(0, null, post);
  return p;
});

test('answers resolver returns the list of answers of the question', t => {
  const exec = sinon.stub();
  const posts = [{_id: 'id-123'}, {_id: 'id-234'}];
  const answerIds = ['id-123', 'id-234'];
  const findPost = PostModel.find = sinon.stub().returns({exec});
  const p = Question.answers({answerIds}).then(results => {
    t.is(results, posts);
    t.is(findPost.lastCall.args[0]['_id']['$in'], answerIds);
  });
  exec.callArgWith(0, null, posts);
  return p;
});