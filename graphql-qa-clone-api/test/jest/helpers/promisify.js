import {promisify} from '../../../src/helpers';

test('resolves promise if a result is returned', () => {
  const exec = jest.fn(cb => cb(null, 'foo'));
  return expect(promisify({exec})).resolves.toEqual('foo');
});

test('rejects promise if an error happens', () => {
  const exec = jest.fn(cb => cb('error'));
  return expect(promisify({exec})).rejects.toEqual('error');
});