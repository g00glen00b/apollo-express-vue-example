import PostModel from '../../../src/models/Post';
import Question from '../../../src/resolvers/Question';

test('first post resolver returns the first post by its identifier', () => {
  const post = {_id: 'id-123'};
  const exec = jest.fn(cb => cb(null, post));
  const findPostById = PostModel.findById = jest.fn().mockReturnValue({exec});
  return Question.firstPost({firstPostId: 'id-123'}).then(result => {
    expect(result).toBe(post);
    expect(findPostById).toHaveBeenLastCalledWith('id-123');
  });
});

test('answers resolver returns the list of answers of the question', () => {
  const posts = [{_id: 'id-123'}, {_id: 'id-234'}];
  const answerIds = ['id-123', 'id-234'];
  const exec = jest.fn(cb => cb(null, posts));
  const findPost = PostModel.find = jest.fn().mockReturnValue({exec});
  return Question.answers({answerIds}).then(results => {
    expect(results).toBe(posts);
    expect(findPost).toHaveBeenLastCalledWith(expect.objectContaining({_id: {$in: answerIds}}));
  });
});