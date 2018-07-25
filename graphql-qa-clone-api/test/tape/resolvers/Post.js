import test from 'tape';
import UserModel from '../../../src/models/User';
import QuestionModel from '../../../src/models/Question';
import Post from '../../../src/resolvers/Post';
import * as sinon from 'sinon';

test('author resolver fetches the user', t => {
  const exec = sinon.stub();
  const user = {id: 1, name: 'Foo'};
  const findUser = UserModel.findById = sinon.stub().returns({exec});
  Post.author({authorId: 1}).then(result => {
    t.is(result, user);
    t.is(findUser.lastCall.args[0], 1);
    t.end();
  });
  exec.callArgWith(0, null, user);
});

test('voteCount resolver subtracts the downvotes from the upvotes', t => {
  const upvote = {status: 'UP'}, downvote = {status: 'DOWN'};
  t.is(Post.voteCount({votes: [upvote, upvote, downvote, upvote]}), 2);
  t.end();
});

test('question resolver fetches the question', t => {
  const exec = sinon.stub();
  const question = {id: 1, title: 'Foo'};
  const findQuestion = QuestionModel.findById = sinon.stub().returns({exec});
  Post.question({questionId: 1}).then(result => {
    t.is(result, question);
    t.is(findQuestion.lastCall.args[0], 1);
    t.end();
  });
  exec.callArgWith(0, null, question);
});