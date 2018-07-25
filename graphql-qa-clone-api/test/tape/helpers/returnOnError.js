import test from 'tape';
import {returnOnError} from '../../../src/helpers';

test('returns the result if no error was thrown', t => {
  t.equal(returnOnError(() => 'foo', 'bar'), 'foo');
  t.end();
});

test('returns the alternative if an error was thrown', t => {
  t.equal(returnOnError(() => {throw 'Foo'}, 'bar'), 'bar');
  t.end();
});