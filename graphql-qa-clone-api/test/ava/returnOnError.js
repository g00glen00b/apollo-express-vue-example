import {test} from 'ava';
import {returnOnError} from '../../src/helpers';

test('returns the result if no error was thrown', t => {
  t.is(returnOnError(() => 'foo', 'bar'), 'foo');
});

test('returns the alternative if an error was thrown', t => {
  t.is(returnOnError(() => {throw 'Foo'}, 'bar'), 'bar');
});