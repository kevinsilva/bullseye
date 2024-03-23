import Price from "../models/price";
import Security from "../models/security";
import { priceArgs, securityArgs } from "../utils/types";
import dateScalar from "../scalars/date";
import bigIntScalar from "../scalars/bigint";

const resolvers = {
  Date: dateScalar,
  BigInt: bigIntScalar,
  Query: {
    securities: async (): Promise<Security[]> => {
      const securities: Security[] = await Security.findAll();
      return securities;
    },
    security: async (_:null, args: securityArgs) => {
      const security = await Security.findOne({ where: { id: args.id } });
      return security;
    },
    prices: async (_:null, args: priceArgs) => {
      const prices = await Price.findAll({ where: { securityId: args.securityId } });
      return prices;
    }
  }
};

export default resolvers;