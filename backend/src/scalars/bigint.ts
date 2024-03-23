import { GraphQLScalarType, Kind } from 'graphql';

const bigIntScalar = new GraphQLScalarType({
  name: 'BigInt',
  description: 'BigInt custom scalar type',
  serialize(value) {
    if (typeof value === 'bigint') return value.toString(); // Serialize BigInt to string
    throw new Error('GraphQL BigInt Scalar serializer expected a `bigint` value');
  },
  parseValue(value) {
    const parsed = BigInt(value as string);
    if (!isNaN(Number(parsed))) return parsed; // Parse value to BigInt

    throw new Error('GraphQL BigInt Scalar parser expected a valid `bigint` string');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const parsed = BigInt(ast.value);
      if (!isNaN(Number(parsed))) return parsed; // Parse AST value to BigInt

    }
    throw new Error('GraphQL BigInt Scalar parser expected a valid `bigint` string');
  },
});

export default bigIntScalar;