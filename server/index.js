const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, err => {
  if (err) return console.log(err);
  console.log('Connected to MongoDB 🚀');
});

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
