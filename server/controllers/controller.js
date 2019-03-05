const Health = require('../models/health');

exports.getHealth = async (req, res) => {
  const health = await new Health({ isHealthy: true }).save();
  await Health.collection.drop();
  return res.status(200).send(health);
};
