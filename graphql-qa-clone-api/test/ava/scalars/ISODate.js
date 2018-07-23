import {test} from 'ava';
import ISODate from '../../../src/scalars/ISODate';
import {Kind} from 'graphql/language';

test('serialization returns an ISO timestamp', t => {
  t.is(ISODate.serialize(new Date('2018-01-01T00:00:00Z')), '2018-01-01T00:00:00.000Z');
  t.is(ISODate.serialize('otherstuff'), null);
});

test('parsing value returns a Date', t => {
  t.deepEqual(ISODate.parseValue('2018-01-01T00:00:00Z'), new Date('2018-01-01T00:00:00Z'));
  t.is(ISODate.parseValue(null), null);
});

test('parsing literal returns a Date', t => {
  t.deepEqual(ISODate.parseLiteral({kind: Kind.STRING, value: '2018-01-01T00:00:00Z'}), new Date('2018-01-01T00:00:00Z'));
  t.is(ISODate.parseLiteral({kind: Kind.BOOLEAN, value: true}), null);
  t.is(ISODate.parseLiteral({kind: Kind.STRING, value: null}), null);
});