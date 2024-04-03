import dateScalar from '../scalars/date';
import bigIntScalar from '../scalars/bigint';

const scalarResolvers = {
  Date: dateScalar,
  BigInt: bigIntScalar,
};

export default scalarResolvers;