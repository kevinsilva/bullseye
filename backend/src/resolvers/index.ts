import { Price, Security } from "../models";
import { priceArgs, securityArgs } from "../utils/types";

const resolvers = {
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