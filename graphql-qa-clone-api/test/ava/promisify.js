import {promisify} from '../../src/helpers';
import {test} from 'ava';

test('resolves promise if a result is returned', t => {
  const exec = jest.fn();
  return expect(promisify({exec})).resolves.toBe('foo');
});

test('rejects promise if an error happens', t => {
  const exec = jest.fn();
  const p = promisify({exec}).then(null, err => {
    t.is(err, 'error');
  });
  exec.callArgWith(0, 'error');
  return p;
});