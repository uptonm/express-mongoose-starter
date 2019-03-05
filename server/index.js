import router from './routes/routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, err => {
  if (err) return console.log(err);
  console.log('Connected to MongoDB 🚀');
});

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening on port ${process.env.PORT || 8080}`);
});

export default app;
