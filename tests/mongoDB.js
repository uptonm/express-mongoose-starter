import mongoose from 'mongoose';
module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
  },
  disconnect: done => {
    mongoose.disconnect(done);
  }
};
