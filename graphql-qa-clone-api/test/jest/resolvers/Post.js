import UserModel from '../../../src/models/User';
import QuestionModel from '../../../src/models/Question';
import Post from '../../../src/resolvers/Post';

test('author resolver fetches the user', () => {
  const exec = jest.fn(cb => cb(null, user));
  const user = {id: 1, name: 'Foo'};
  const findUser = UserModel.findById = jest.fn().mockReturnValue({exec});
  return Post.author({authorId: 1}).then(result => {
    expect(result).toBe(user);
    expect(findUser).toHaveBeenLastCalledWith(1);
  });
});

test('voteCount resolver subtracts the downvotes from the upvotes', () => {
  const upvote = {status: 'UP'}, downvote = {status: 'DOWN'};
  expect(Post.voteCount({votes: [upvote, upvote, downvote, upvote]})).toEqual(2);
});

test('question resolver fetches the question', () => {
  const question = {id: 1, title: 'Foo'};
  const exec = jest.fn(cb => cb(null, question));
  const findQuestion = QuestionModel.findById = jest.fn().mockReturnValue({exec});
  return Post.question({questionId: 1}).then(result => {
    expect(result).toBe(question);
    expect(findQuestion).toHaveBeenLastCalledWith(1);
  });
});