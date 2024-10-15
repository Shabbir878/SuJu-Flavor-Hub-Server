import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// Define the root route before other middleware
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Register API routes
app.use('/api', router);

// Error handling middlewares
app.use(globalErrorHandler);
app.use(notFound);

export default app;
