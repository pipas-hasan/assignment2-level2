import express, { Request, Response } from 'express';
const app = express()


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World welcome to my!');
})


export default app;