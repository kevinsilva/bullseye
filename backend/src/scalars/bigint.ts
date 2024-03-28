import { GraphQLScalarType, Kind } from 'graphql';

const bigIntScalar = new GraphQLScalarType({
  name: 'BigInt',
  description: 'BigInt custom scalar type',
  serialize(value) {
    // Convert outgoing BigInt to string for JSON
    if (typeof value === 'bigint') return value.toString();

    throw new Error(
      'GraphQL BigInt Scalar serializer expected a `bigint` value'
    );
  },
  parseValue(value) {
    // Convert incoming string to Bigint
    if (typeof value === 'string') return BigInt(value);

    throw new Error(
      'GraphQL BigInt Scalar parser expected a valid `bigint` string'
    );
  },
  parseLiteral(ast) {
    // Convert hard-coded AST string to BigInt
    if (ast.kind === Kind.STRING) return BigInt(ast.value);

    // Invalid hard-coded value (not a string)
    return null;
  },
});

export default bigIntScalar;
