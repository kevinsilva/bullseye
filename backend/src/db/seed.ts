import { seedDatabase } from '../utils/helpers';
import prisma from '../db/db';

async function main() {
  await seedDatabase();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
