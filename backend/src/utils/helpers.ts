import * as fs from 'fs';
import prisma from '../db/db';
import { seedDataTypes } from '../utils/types';
import { DB_FILE_PATH } from './config';

export const seedDatabase = async (): Promise<void> => {
  try {
    const isSeeded = await isDBSeeded();

    if (isSeeded) {
      console.log('Database already seeded');
      return;
    }

    const data = await convertJSONFile<seedDataTypes>(DB_FILE_PATH);

    for (const security of data) {
      const newSecurity = await prisma.security.create({
        data: {
          ticker: security.ticker,
          name: security.securityName,
          sector: security.sector,
          country: security.country,
          trend: security.trend,
        },
      });

      for (const dts of security.prices) {
        await prisma.dailyTimeSeries.create({
          data: {
            date: new Date(dts.date),
            closePrice: parseFloat(dts.close),
            volume: BigInt(dts.volume),
            securityId: newSecurity.id,
          },
        });
      }
    }

    console.log('Database seeded');
  } catch (error) {
    console.error('Error while seeding database', error);
  }
};

const isDBSeeded = async (): Promise<boolean> => {
  const securityCount = await prisma.security.count();
  const dtsCount = await prisma.dailyTimeSeries.count();

  return securityCount > 0 && dtsCount > 0;
};

const convertJSONFile = async <T>(filePath: string): Promise<T[]> => {
  try {
    const rawData: string = await fs.promises.readFile(filePath, 'utf8');
    const jsonData: T[] = JSON.parse(rawData) as T[];

    return jsonData;
  } catch (error) {
    throw new Error('Error reading JSON file');
  }
};
