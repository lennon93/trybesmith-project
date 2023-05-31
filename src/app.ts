import express from 'express';
import productRouter from './routes/product.router';

const app = express();

app.use(express.json());

export default app;

app.use(productRouter);
