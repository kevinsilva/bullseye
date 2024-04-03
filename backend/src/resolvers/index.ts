import { mergeResolvers } from '@graphql-tools/merge';
import securityResolvers from './securityResolvers';
import dailyTimeSeriesResolvers from './dailyTimeSeriesResolvers';
import scalarResolvers from './scalarResolvers';

console.log('Running resolvers...');

const resolvers = mergeResolvers([
  securityResolvers,
  dailyTimeSeriesResolvers,
  scalarResolvers
]);

export default resolvers;
