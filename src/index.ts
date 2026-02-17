import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

type User = { id: number; name: string };
const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const products = [
  { id: 'p1', name: 'Widget', price: 9.99 },
  { id: 'p2', name: 'Gadget', price: 19.99 },
];

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/users', (_req, res) => {
  res.json(users);
});

app.get('/products', (_req, res) => {
  res.json(products);
});

app.get('/ping', (_req, res) => {
  res.json({ pong: true });
});

app.get('/status', (_req, res) => {
  res.json({ ok: true });
});

app.get('/status2', (_req, res) => {
  res.json({ ok: true });
});

app.get('/badmsg', (_req, res) => {
  res.json({ ok: true });
});

app.get('/badmsg2', (_req, res) => {
  res.json({ ok: true });
});

// Route that uses a value with a type error to test pre-push
const willFail: number = 'oops';
app.get('/type-error', (_req, res) => {
  res.json({ value: willFail });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const bad: number = 42;
console.log(bad);
app.listen(port, () => {
  process.stdout.write(`server listening on http://localhost:${port}\n`);
});
