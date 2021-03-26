import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

let arr: {
  pValues: number[];
  p0: number[];
  p1: number[];
  p2: number[];
  p3: number[];
}[] = [
  {
    pValues: [0, 0, 0, 0],
    p0: [0, 0, 0, 0],
    p1: [0, 0, 0, 0],
    p2: [0, 0, 0, 0],
    p3: [0, 0, 0, 0],
  },
];

app.get('/', async (req: Request, res: Response) => {
  res.send('Go to /game/start');
});
app.get('/game/start', async (req: Request, res: Response) => {
  arr[0].pValues[0] = Math.floor(Math.random() * 3 + 1);
  arr[0].pValues[1] = Math.floor(Math.random() * 3 + 1);
  arr[0].pValues[2] = Math.floor(Math.random() * 3 + 1);
  arr[0].pValues[3] = Math.floor(Math.random() * 3 + 1);

  // arr[0].pValues[0] = 1;
  // arr[0].pValues[1] = 6;
  // arr[0].pValues[2] = 2;
  // arr[0].pValues[3] = 3;

  if (arr[0].pValues[0] === 1) {
    if (arr[0].pValues[1] === 2) {
      arr[0].p1[0]++;
    }
    if (arr[0].pValues[2] === 2) {
      arr[0].p2[0]++;
    }
    if (arr[0].pValues[3] === 2) {
      arr[0].p3[0]++;
    }
  }

  if (arr[0].pValues[0] === 2) {
    if (arr[0].pValues[1] === 3) {
      arr[0].p1[0]++;
    }
    if (arr[0].pValues[2] === 3) {
      arr[0].p2[0]++;
    }
    if (arr[0].pValues[3] === 3) {
      arr[0].p3[0]++;
    }
  }

  if (arr[0].pValues[0] === 3) {
    if (arr[0].pValues[1] === 1) {
      arr[0].p1[0]++;
    }
    if (arr[0].pValues[2] === 1) {
      arr[0].p2[0]++;
    }
    if (arr[0].pValues[3] === 1) {
      arr[0].p3[0]++;
    }
  }

  res.send(arr);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
