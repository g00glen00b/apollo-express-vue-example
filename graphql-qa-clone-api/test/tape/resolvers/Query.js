import test from 'tape';
import QuestionModel from '../../../src/models/Question';
import UserModel from '../../../src/models/User';
import * as sinon from 'sinon';
import Query from '../../../src/resolvers/Query';

test('questions resolver returns all questions', t => {
  const handler = {};
  const query = {offset: 0, limit: 10};
  const questions = [{_id: 123}];
  QuestionModel.find = sinon.stub().returns(handler);
  handler.sort = sinon.stub().returns(handler);
  handler.skip = sinon.stub().returns(handler);
  handler.limit = sinon.stub().returns(handler);
  handler.exec = sinon.stub().returns(handler);
  Query.questions(null, {query}).then(result => {
    t.is(handler.sort.lastCall.args[0], '-createdAt');
    t.is(handler.skip.lastCall.args[0], 0);
    t.is(handler.limit.lastCall.args[0], 10);
    t.is(result, questions);
    t.end();
  });
  handler.exec.callArgWith(0, null, questions);
});

test('question resolver returns a question by its unique identifier', t => {
  const exec = sinon.stub();
  const id = 'id-123';
  const question = {_id: 'id-123'};
  const findQuestionById = QuestionModel.findById = sinon.stub().returns({exec});
  Query.question(null, {id}).then(result => {
    t.is(findQuestionById.lastCall.args[0], 'id-123');
    t.is(result, question);
    t.end();
  });
  exec.callArgWith(0, null, question);
});

test('question count resolver returns the amount of existing questions', t => {
  const exec = sinon.stub();
  QuestionModel.count = sinon.stub().returns({exec});
  Query.questionCount().then(result => {
    t.is(result, 12);
    t.end();
  });
  exec.callArgWith(0, null, 12);
});

test('users resolver returns all users', t => {
  const handler = {};
  const query = {offset: 0, limit: 10};
  const users = [{_id: 123}];
  UserModel.find = sinon.stub().returns(handler);
  handler.skip = sinon.stub().returns(handler);
  handler.limit = sinon.stub().returns(handler);
  handler.exec = sinon.stub().returns(handler);
  Query.users(null, {query}).then(result => {
    t.is(handler.skip.lastCall.args[0], 0);
    t.is(handler.limit.lastCall.args[0], 10);
    t.is(result, users);
    t.end();
  });
  handler.exec.callArgWith(0, null, users);
});

test('user resolver returns a user by its unique identifier', t => {
  const exec = sinon.stub();
  const id = 'id-123';
  const user = {_id: 'id-123'};
  const findUserById = UserModel.findById = sinon.stub().returns({exec});
  Query.user(null, {id}).then(result => {
    t.is(findUserById.lastCall.args[0], 'id-123');
    t.is(result, user);
    t.end();
  });
  exec.callArgWith(0, null, user);
});

test('user count resolver returns the amount of existing users', t => {
  const exec = sinon.stub();
  UserModel.count = sinon.stub().returns({exec});
  Query.userCount().then(result => {
    t.is(result, 12);
    t.end();
  });
  exec.callArgWith(0, null, 12);
});