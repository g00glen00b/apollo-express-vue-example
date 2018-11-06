import QuestionModel from '../../../src/models/Question';
import UserModel from '../../../src/models/User';
import Query from '../../../src/resolvers/Query';

test('questions resolver returns all questions', () => {
  const handler = {};
  const query = {offset: 0, limit: 10};
  const questions = [{_id: 123}];
  QuestionModel.find = jest.fn().mockReturnValue(handler);
  handler.sort = jest.fn().mockReturnValue(handler);
  handler.skip = jest.fn().mockReturnValue(handler);
  handler.limit = jest.fn().mockReturnValue(handler);
  handler.exec = jest.fn(cb => cb(null, questions));
  return Query.questions(null, {query}).then(result => {
    expect(handler.sort).toHaveBeenLastCalledWith('-createdAt');
    expect(handler.skip).toHaveBeenLastCalledWith(0);
    expect(handler.limit).toHaveBeenLastCalledWith(10);
    expect(result).toBe(questions);
  });
});

test('question resolver returns a question by its unique identifier', () => {
  const question = {_id: 'id-123'};
  const exec = jest.fn(cb => cb(null, question));
  const id = 'id-123';
  const findQuestionById = QuestionModel.findById = jest.fn().mockReturnValue({exec});
  return Query.question(null, {id}).then(result => {
    expect(findQuestionById).toHaveBeenLastCalledWith('id-123');
    expect(result).toBe(question);
  });
});

test('question count resolver returns the amount of existing questions', () => {
  const exec = jest.fn(cb => cb(null, 12));
  QuestionModel.count = jest.fn().mockReturnValue({exec});
  return expect(Query.questionCount()).resolves.toEqual(12);
});

test('users resolver returns all users', () => {
  const handler = {};
  const query = {offset: 0, limit: 10};
  const users = [{_id: 123}];
  UserModel.find = jest.fn().mockReturnValue(handler);
  handler.skip = jest.fn().mockReturnValue(handler);
  handler.limit = jest.fn().mockReturnValue(handler);
  handler.exec = jest.fn(cb => cb(null, users));
  return Query.users(null, {query}).then(result => {
    expect(handler.skip).toHaveBeenLastCalledWith(0);
    expect(handler.limit).toHaveBeenLastCalledWith(10);
    expect(result).toBe(users);
  });
});

test('user resolver returns a user by its unique identifier', () => {
  const id = 'id-123';
  const user = {_id: 'id-123'};
  const exec = jest.fn(cb => cb(null, user));
  const findUserById = UserModel.findById = jest.fn().mockReturnValue({exec});
  return Query.user(null, {id}).then(result => {
    expect(findUserById).toHaveBeenLastCalledWith('id-123');
    expect(result).toBe(user);
  });
});

test('user count resolver returns the amount of existing users', () => {
  const exec = jest.fn(cb => cb(null, 12));
  UserModel.count = jest.fn().mockReturnValue({exec});
  return expect(Query.userCount()).resolves.toEqual(12);
});