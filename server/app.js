import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';
import { config } from './config';

const app = express();
const port = 3001;
const { user, pass } = config;

mongoose.connect('mongodb://localhost:27017', {
  dbName: "db",
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', routes);

app.use((error, req, res, next) => {
  res.json({
    error: true,
    message: error.message
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
