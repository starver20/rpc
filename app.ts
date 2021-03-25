import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', async (req: Request, res: Response) => {
  res.send('Go to /game/start');
});
app.get('/game/start', async (req: Request, res: Response) => {
  var a = Math.floor(Math.random() * 6);
  const data = {
    rand: a,
  };
  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
