import {promisify} from '../../src/helpers';
import {test} from 'ava';
import * as sinon from 'sinon';

test('resolves promise if a result is returned', t => {
  const exec = sinon.stub();
  const p = promisify({exec}).then(result => {
    t.is(result, 'foo');
  });
  exec.callArgWith(0, null, 'foo');
  return p;
});

test('rejects promise if an error happens', t => {
  const exec = sinon.stub();
  const p = promisify({exec}).then(null, err => {
    t.is(err, 'error');
  });
  exec.callArgWith(0, 'error');
  return p;
});