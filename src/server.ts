import "dotenv/config";
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';


import { router } from './routes';

const app = express();

// ✅ WEBHOOK COM BODY RAW (ANTES DE TUDO)
/* app.post(
  '/webhooks',
  bodyParser.raw({ type: 'application/json' }),
  new WebhooksController().handle
);
 */

app.use((req, res, next) => {
  if(req.originalUrl === '/webhooks') {
    next();
  } else {
    express.json()(req, res, next);
  }
})
// resto da aplicação
/* app.use(express.json()); */
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});

app.listen(3333, () => console.log('Server is running on port 3333'));
