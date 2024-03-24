import Price from "../models/dailyTimeSeries";
import Security from "../models/security";

export const seedDatabase = async (): Promise<void> => {
  try {
    const securityCount = await Security.count();
    const priceCount = await Price.count();

    console.log(securityCount, priceCount);

    if (securityCount > 0 || priceCount > 0) {
      console.log('Database already seeded');
      return;
    }

    console.log('Database seeded');
} catch(error) {
    console.error('Error while seeding database', error);
  }
};

