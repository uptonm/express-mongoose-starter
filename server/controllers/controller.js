import Health from '../models/health';

const getHealth = async (req, res) => {
  const health = await new Health({ isHealthy: true }).save();
  await Health.collection.drop();
  return res.status(200).send(health);
};

export { getHealth };
