import ISODate from '../../../src/scalars/ISODate';
import {Kind} from 'graphql/language';

test('serialization returns an ISO timestamp', () => {
  expect(ISODate.serialize(new Date('2018-01-01T00:00:00Z'))).toEqual('2018-01-01T00:00:00.000Z');
  expect(ISODate.serialize('otherstuff')).toBeNull();
});

test('parsing value returns a Date', () => {
  expect(ISODate.parseValue('2018-01-01T00:00:00Z')).toEqual(new Date('2018-01-01T00:00:00Z'));
  expect(ISODate.parseValue(null)).toBeNull();
});

test('parsing literal returns a Date', () => {
  expect(ISODate.parseLiteral({kind: Kind.STRING, value: '2018-01-01T00:00:00Z'})).toEqual(new Date('2018-01-01T00:00:00Z'));
  expect(ISODate.parseLiteral({kind: Kind.BOOLEAN, value: true})).toBeNull();
  expect(ISODate.parseLiteral({kind: Kind.STRING, value: null})).toBeNull();
});