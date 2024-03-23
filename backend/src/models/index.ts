import  Security  from "./security";
import  Price from "./price";

const syncModels = async () => {
  try {
    await Security.sync({ alter: true });
    await Price.sync({ alter: true });
    console.log('Models synced');
  } catch(error) {
    console.error('Error while syncing models', error);
  }
};

syncModels()
  .then(() => console.log('Model syncing complete'))
  .catch((error) => console.error(error));

export { Security, Price };