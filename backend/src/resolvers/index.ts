import prisma from "../db/db";
import { SecurityTypes, securityArgs, dailyTimeSeriesArgs } from "../utils/types";
import dateScalar from "../scalars/date";
import bigIntScalar from "../scalars/bigint";

const resolvers = {
  Date: dateScalar,
  BigInt: bigIntScalar,
  Query: {
    securityList: async (): Promise<SecurityTypes[]> => {
      const securities: SecurityTypes[] = await prisma.security.findMany({
        include: {
          dailyTimeSeries: true
        },
      });
      return securities;
    },
    securityDetail: async (_:null, args: securityArgs) => {
      const security = await prisma.security.findUnique({
        where: { id: Number(args.id) },
        include: {
          dailyTimeSeries: true
        }});

      return security;
    },
    dailyTimeSeries: async (_:null, args: dailyTimeSeriesArgs) => {
      const dailyTimeSeries = await prisma.dailyTimeSeries.findMany({
        where: { securityId: Number(args.securityId) }
      });
      return dailyTimeSeries;
    }
  }
};

export default resolvers;