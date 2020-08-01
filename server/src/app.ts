import express ,{ Express } from 'express';

const app: Express = express();
const PORT: string | number = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log('Listen on port: ' + PORT);
})
