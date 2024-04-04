import { mergeResolvers } from '@graphql-tools/merge';
import securityResolvers from './securityResolvers';
import dailyTimeSeriesResolvers from './dailyTimeSeriesResolvers';
import scalarResolvers from './scalarResolvers';

const resolvers = mergeResolvers([
  securityResolvers,
  dailyTimeSeriesResolvers,
  scalarResolvers
]);

export default resolvers;
