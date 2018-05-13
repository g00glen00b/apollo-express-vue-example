import {Kind} from 'graphql/language';
import {GraphQLScalarType} from 'graphql';
import {returnOnError} from '../helpers';

function serialize(value) {
  return value instanceof Date ? value.toISOString() : null;
}

function parseValue(value) {
  return returnOnError(() => value == null ? null : new Date(value), null);
}

function parseLiteral(ast) {
  return ast.kind === Kind.STRING ? parseValue(ast.value) : null;
}

export default new GraphQLScalarType({
  name: 'ISODate',
  description: 'JavaScript Date object as an ISO timestamp',
  serialize, parseValue, parseLiteral
});