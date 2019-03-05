import mongoose from 'mongoose';

const health = new mongoose.Schema({
  isHealthy: Boolean
});

export default mongoose.model('health', health);
