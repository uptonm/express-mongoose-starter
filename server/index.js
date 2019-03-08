const app = require('./app');
const colors = require('colors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useCreateIndex: true }, err => {
  if (err) return logMessage(err, true);
  return logMessage(`Connected to MongoDB on port ${colors.blue(27017)}`);
});
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

app.listen(process.env.PORT || 8080, err => {
  if (err) {
    return logMessage(err, true);
  }
  return logMessage(`Server is listening on port ${colors.blue(process.env.PORT || 8080)}`, false);
});

const logMessage = (msg, err) => {
  let d = new Date().toLocaleTimeString();
  if (err) {
    return console.log(`${colors.grey(d)} ❗️ ${colors.red(msg)}`);
  }
  return console.log(`${colors.grey(d)} ✨ ${colors.green(msg)}`);
};
