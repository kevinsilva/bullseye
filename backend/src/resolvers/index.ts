import DailyTimeSeries from "../models/dailyTimeSeries";
import Security from "../models/security";
import { dailyTimeSeriesArgs, securityArgs } from "../utils/types";
import dateScalar from "../scalars/date";
import bigIntScalar from "../scalars/bigint";

const resolvers = {
  Date: dateScalar,
  BigInt: bigIntScalar,
  Query: {
    securityList: async (): Promise<Security[]> => {
      const securities: Security[] = await Security.findAll({include: [{model: DailyTimeSeries}]});
      return securities;
    },
    securityDetail: async (_:null, args: securityArgs) => {
      const security = await Security.findOne({ where: { id: args.id } });
      return security;
    },
    dailyTimeSeries: async (_:null, args: dailyTimeSeriesArgs) => {
      const dailyTimeSeries = await DailyTimeSeries.findAll({ where: { securityId: args.securityId } });
      return dailyTimeSeries;
    }
  }
};

export default resolvers;