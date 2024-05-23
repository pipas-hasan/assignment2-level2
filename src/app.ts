import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/product.route';
const app = express()



//middleware
app.use(express.json());
app.use('/api/products', ProductRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World welcome to my!');

})


export default app;