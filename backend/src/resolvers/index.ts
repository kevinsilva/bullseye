import prisma from '../db/db';
import { GraphQLError } from 'graphql';
import {
  SecurityTypes,
  securityArgs,
  dailyTimeSeriesArgs,
  DailyTimeSeriesTypes,
} from '../utils/types';
import dateScalar from '../scalars/date';
import bigIntScalar from '../scalars/bigint';

const resolvers = {
  Date: dateScalar,
  BigInt: bigIntScalar,
  Query: {
    securityList: async (): Promise<SecurityTypes[] | null> => {
      try {
        const securities: SecurityTypes[] = await prisma.security.findMany({
          include: {
            dailyTimeSeries: true,
          },
        });

        return securities;
      } catch(error) {
        throw new Error(`Failed to fetch security list: ${error}`);
      }
    },
    securityDetail: async (_: null, args: securityArgs): Promise<SecurityTypes | null> => {
      try {
        if (!args.id) throw new GraphQLError('Security ID is required');

        const security = await prisma.security.findUnique({
          where: { id: Number(args.id) },
          include: {
            dailyTimeSeries: true,
          },
        });

        return security;
      } catch (error) {
        throw new GraphQLError(`Failed to fetch security detail: ${error}`);
      }
    },
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

export default resolvers;
