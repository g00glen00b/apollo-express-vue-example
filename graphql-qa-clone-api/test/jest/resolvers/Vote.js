import UserModel from '../../../src/models/User';
import Vote from '../../../src/resolvers/Vote';

test('author resolver returns the author by its identifier', () => {
  const author = {_id: 'id-123'};
  const exec = jest.fn(cb => cb(null, author));
  const findUserById = UserModel.findById = jest.fn().mockReturnValue({exec});
  return Vote.author({userId: 'id-123'}).then(result => {
      expect(result).toBe(author);
      expect(findUserById).toHaveBeenLastCalledWith('id-123');
  });
});