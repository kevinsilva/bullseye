import * as fs from 'fs';
import * as path from 'path';

import DailyTimeSeries from "../models/dailyTimeSeries";
import Security from "../models/security";
import { seedDataTypes } from "../utils/types";

export const seedDatabase = async (): Promise<void> => {
  try {
    // const securityCount = await Security.count();
    // const dtsCount = await DailyTimeSeries.count();

    // if (securityCount > 0 || dtsCount > 0) {
    //   console.log('Database already seeded');
    //   return;
    // }

    const filePath = path.join(__dirname,'..', 'db', 'data.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const securityData = JSON.parse(rawData) as seedDataTypes[];

    for (const security of securityData) {
        await Security.create({
          ticker: security.ticker,
          name: security.securityName,
          sector: security.sector,
          country: security.country,
          trend: security.trend
        });

        for (const dts of security.prices) {
          await DailyTimeSeries.create({
            date: new Date(dts.date),
            closePrice: parseFloat(dts.close),
            volume: BigInt(dts.volume),
          });
        }
    }
    console.log('Database seeded');

  } catch(error) {
    console.error('Error while seeding database', error);
  }
};

