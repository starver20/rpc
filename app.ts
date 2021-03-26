import express, { Request, Response } from 'express';
import { appRoute } from './routes/app';

const app = express();

app.use(appRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || 3000}`);
});
