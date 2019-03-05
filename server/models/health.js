const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  isHealthy: Boolean
});

const health = mongoose.model('health', healthSchema);
module.exports = health;
