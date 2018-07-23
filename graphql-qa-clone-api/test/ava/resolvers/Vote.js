import {test} from 'ava';
import UserModel from '../../../src/models/User';
import * as sinon from 'sinon';
import Vote from '../../../src/resolvers/Vote';

test('author resolver returns the author by its identifier', t => {
  const exec = sinon.stub();
  const author = {_id: 'id-123'};
  const findUserById = UserModel.findById = sinon.stub().returns({exec});
  const p = Vote.author({userId: 'id-123'}).then(result => {
      t.is(result, author);
      t.is(findUserById.lastCall.args[0], 'id-123');
  });
  exec.callArgWith(0, null, author);
  return p;
});