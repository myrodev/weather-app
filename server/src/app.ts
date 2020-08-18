import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: string | number = process.env.PORT || 6666;

app.get('/', (_, res: Response) => {
  res.status(201).json({ message: "Hi!" });
});

app.listen(PORT, () => {
  console.log('Listen on port: ' + PORT);
})
