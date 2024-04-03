import prisma from '../db/db';
import { GraphQLError } from 'graphql';
import {
  dailyTimeSeriesArgs,
  DailyTimeSeriesTypes,
} from '../utils/types';

const dailyTimeSeriesResolvers = {
  Query: {
    dailyTimeSeries: async (_: null, args: dailyTimeSeriesArgs): Promise<DailyTimeSeriesTypes[] | null> => {
      try {
        if(!args.securityId) throw new GraphQLError('Security ID is required');

        const dailyTimeSeries = await prisma.dailyTimeSeries.findMany({
          where: { securityId: Number(args.securityId) },
        });
        return dailyTimeSeries;
      } catch (error) {
        throw new GraphQLError(`Failed to fetch daily time series: ${error}`);
      }
    },
  },
};

export default dailyTimeSeriesResolvers;