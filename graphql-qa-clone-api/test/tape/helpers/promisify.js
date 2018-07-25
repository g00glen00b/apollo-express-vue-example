import {promisify} from '../../../src/helpers';
import * as sinon from 'sinon';
import test from 'tape';

test('resolves promise if a result is returned', t => {
  const exec = sinon.stub();
  promisify({exec}).then(result => {
    t.equal(result, 'foo');
    t.end();
  });
  exec.callArgWith(0, null, 'foo');
});

test('rejects promise if an error happens', t => {
  const exec = sinon.stub();
  promisify({exec}).then(null, err => {
    t.equal(err, 'error');
    t.end();
  });
  exec.callArgWith(0, 'error');
});