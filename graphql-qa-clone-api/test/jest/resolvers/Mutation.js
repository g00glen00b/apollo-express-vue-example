import QuestionModel from '../../../src/models/Question';
import PostModel from '../../../src/models/Post';
import UserModel from '../../../src/models/User';
import mongoose from 'mongoose';
import Mutation from '../../../src/resolvers/Mutation';

test('createQuestion creates a new model', () => {
  const question = {_id: 'id-123'};
  const createPost = PostModel.create = jest.fn((_, cb) => cb(null, {_id: 'id-123'}));
  const updateUser = UserModel.update = jest.fn((_, __, cb) => cb(null, {_id: 'id-234'}));
  const input = {title: 'Title', content: 'Content', authorId: 'id-234'};
  QuestionModel.create = jest.fn((_, cb) => cb(null, question));
  mongoose.Types.ObjectId = jest.fn().mockReturnValue('id-123');
  Mutation.createQuestion(null, {input}).then(result => {
    expect(result).toBe(question);
    expect(createPost).toHaveBeenLastCalledWith({
      _id: 'id-123',
      content: 'Content',
      isQuestion: true,
      authorId: 'id-234',
      questionId: 'id-123'
    });
    expect(updateUser).toHaveBeenLastCalledWith({_id: 'id-234'}, expect.objectContaining({$push: {postIds: 'id-123'}}));
  });
});

test('createQuestion returns a rejected promise if creating the question failed', () => {
  const input = {title: 'Title', content: 'Content', authorId: 'id-234'};
  QuestionModel.create = jest.fn((_, cb) => cb('Error 1'));
  PostModel.create = jest.fn((_, cb) => cb('Error 2'));
  UserModel.update = jest.fn((_, __, cb) => cb('Error 3'));
  mongoose.Types.ObjectId = jest.fn().mockReturnValue('id-123');
  return expect(Mutation.createQuestion(null, {input})).rejects.toBeDefined();
});

test('createAnswer creates a new model', () => {
  const answer = {_id: 'id-123'};
  const input = {content: 'Content', authorId: 'id-234', questionId: 'id-345'};
  const createPost = PostModel.create = jest.fn((_, cb) => cb(null, answer));
  const updateUser = UserModel.update = jest.fn((_, __, cb) => cb(null, {_id: 'id-234'}));
  mongoose.Types.ObjectId = jest.fn().mockReturnValue('id-123');
  return Mutation.createAnswer(null, {input}).then(result => {
    expect(result).toBe(answer);
    expect(createPost).toHaveBeenLastCalledWith({
      _id: 'id-123',
      content: 'Content',
      isQuestion: false,
      authorId: 'id-234',
      questionId: 'id-345'
    }, expect.anything());
    expect(updateUser).toHaveBeenLastCalledWith({_id: 'id-234'}, expect.objectContaining({$push: {postIds: 'id-123'}}), expect.anything());
  });
});

test('createUser creates a new model', () => {
  const input = {username: 'JohnDoe123'};
  const user = {_id: 'id-123'};
  UserModel.create = jest.fn((_, cb) => cb(null, user));
  return expect(Mutation.createUser(null, {input})).resolves.toBe(user);
});

test('createUser returns a rejected promise if creating the user failed', () => {
  const input = {username: 'JohnDoe123'};
  UserModel.create = jest.fn((_, cb) => cb('Error'));
  return expect(Mutation.createUser(null, {input})).rejects.toBeDefined();
});