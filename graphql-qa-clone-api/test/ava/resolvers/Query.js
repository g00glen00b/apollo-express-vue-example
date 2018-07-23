import {test} from 'ava';
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
  const p = Query.questions(null, {query}).then(result => {
    t.is(handler.sort.lastCall.args[0], '-createdAt');
    t.is(handler.skip.lastCall.args[0], 0);
    t.is(handler.limit.lastCall.args[0], 10);
    t.is(result, questions);
  });
  handler.exec.callArgWith(0, null, questions);
  return p;
});

test('question resolver returns a question by its unique identifier', t => {
  const exec = sinon.stub();
  const id = 'id-123';
  const question = {_id: 'id-123'};
  const findQuestionById = QuestionModel.findById = sinon.stub().returns({exec});
  const p = Query.question(null, {id}).then(result => {
    t.is(findQuestionById.lastCall.args[0], 'id-123');
    t.is(result, question);
  });
  exec.callArgWith(0, null, question);
  return p;
});

test('question count resolver returns the amount of existing questions', t => {
  const exec = sinon.stub();
  QuestionModel.count = sinon.stub().returns({exec});
  const p = Query.questionCount().then(result => {
    t.is(result, 12);
  });
  exec.callArgWith(0, null, 12);
  return p;
});

test('users resolver returns all users', t => {
  const handler = {};
  const query = {offset: 0, limit: 10};
  const users = [{_id: 123}];
  UserModel.find = sinon.stub().returns(handler);
  handler.skip = sinon.stub().returns(handler);
  handler.limit = sinon.stub().returns(handler);
  handler.exec = sinon.stub().returns(handler);
  const p = Query.users(null, {query}).then(result => {
    t.is(handler.skip.lastCall.args[0], 0);
    t.is(handler.limit.lastCall.args[0], 10);
    t.is(result, users);
  });
  handler.exec.callArgWith(0, null, users);
  return p;
});

test('user resolver returns a user by its unique identifier', t => {
  const exec = sinon.stub();
  const id = 'id-123';
  const user = {_id: 'id-123'};
  const findUserById = UserModel.findById = sinon.stub().returns({exec});
  const p = Query.user(null, {id}).then(result => {
    t.is(findUserById.lastCall.args[0], 'id-123');
    t.is(result, user);
  });
  exec.callArgWith(0, null, user);
  return p;
});

test('user count resolver returns the amount of existing users', t => {
  const exec = sinon.stub();
  UserModel.count = sinon.stub().returns({exec});
  const p = Query.userCount().then(result => {
    t.is(result, 12);
  });
  exec.callArgWith(0, null, 12);
  return p;
});