import QuestionModel from '../../../src/models/Question';
import PostModel from '../../../src/models/Post';
import UserModel from '../../../src/models/User';
import mongoose from 'mongoose';
import Mutation from '../../../src/resolvers/Mutation';
import {test} from 'ava';
import * as sinon from 'sinon';

test('createQuestion creates a new model', t => {
  const createQuestion = QuestionModel.create = sinon.stub();
  const createPost = PostModel.create = sinon.stub();
  const updateUser = UserModel.update = sinon.stub();
  const question = {_id: 'id-123'};
  const input = {title: 'Title', content: 'Content', authorId: 'id-234'};
  mongoose.Types.ObjectId = sinon.stub().returns('id-123');
  const p = Mutation.createQuestion(null, {input}).then(result => {
    t.is(result, question);
    t.deepEqual(createPost.lastCall.args[0], {
      _id: 'id-123',
      content: 'Content',
      isQuestion: true,
      authorId: 'id-234',
      questionId: 'id-123'
    });
    t.deepEqual(updateUser.lastCall.args[0], {_id: 'id-234'});
    t.deepEqual(updateUser.lastCall.args[1].$push.postIds, 'id-123');
  });
  createQuestion.callArgWith(1, null, question);
  createPost.callArgWith(1, null, {_id: 'id-123'});
  updateUser.callArgWith(2, null, {_id: 'id-234'});
  return p;
});

test('createQuestion returns a rejected promise if creating the question failed', t => {
  const createQuestion = QuestionModel.create = sinon.stub();
  const createPost = PostModel.create = sinon.stub();
  const updateUser = UserModel.update = sinon.stub();
  const input = {title: 'Title', content: 'Content', authorId: 'id-234'};
  mongoose.Types.ObjectId = sinon.stub().returns('id-123');
  const p = Mutation.createQuestion(null, {input}).then(() => {
    t.fail('Should not use success handler');
  }, () => {
    t.pass('Should use error handler');
  });
  createQuestion.callArgWith(1, 'Error 1');
  createPost.callArgWith(1, 'Error 2');
  updateUser.callArgWith(2, 'Error 3');
  return p;
});

test('createAnswer creates a new model', t => {
  const createPost = PostModel.create = sinon.stub();
  const updateUser = UserModel.update = sinon.stub();
  const answer = {_id: 'id-123'};
  const input = {content: 'Content', authorId: 'id-234', questionId: 'id-345'};
  mongoose.Types.ObjectId = sinon.stub().returns('id-123');
  const p = Mutation.createAnswer(null, {input}).then(result => {
    t.is(result, answer);
    t.deepEqual(createPost.lastCall.args[0], {
      _id: 'id-123',
      content: 'Content',
      isQuestion: false,
      authorId: 'id-234',
      questionId: 'id-345'
    });
    t.deepEqual(updateUser.lastCall.args[0], {_id: 'id-234'});
    t.deepEqual(updateUser.lastCall.args[1].$push.postIds, 'id-123');
  });
  createPost.callArgWith(1, null, answer);
  updateUser.callArgWith(2, null, {_id: 'id-234'});
  return p;
});

test('createUser creates a new model', t => {
  const createUser = UserModel.create = sinon.stub();
  const input = {username: 'JohnDoe123'};
  const user = {_id: 'id-123'};
  const p = Mutation.createUser(null, {input}).then(result => {
    t.is(result, user);
  });
  createUser.callArgWith(1, null, user);
  return p;
});

test('createUser returns a rejected promise if creating the user failed', t => {
  const createUser = UserModel.create = sinon.stub();
  const input = {username: 'JohnDoe123'};
  const p = Mutation.createUser(null, {input}).then(() => {
    t.fail('Should not use success handler');
  }, () => {
    t.pass('Should use error handler');
  });
  createUser.callArgWith(1, 'Error');
  return p;
});