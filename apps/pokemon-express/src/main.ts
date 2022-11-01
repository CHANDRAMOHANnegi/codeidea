/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import { pokemon } from './pokemon';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to pokemon-express!' });
});

app.get('/search', (req, res) => {
  const q = ((req.query?.q as string) ?? '').toLowerCase();
  res.send(
    pokemon.filter(({ name: { english } }) => english.toLowerCase().includes(q))
  );
});
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
