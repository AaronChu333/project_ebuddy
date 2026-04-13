import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '..', '.env') });
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import usersRouter from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ---- Middleware ----
app.use(cors());
app.use(express.json());

// Request logger (dev)
app.use((req, _res, next) => {
  console.log(`${new Date().toLocaleTimeString()} │ ${req.method} ${req.url}`);
  next();
});

// ---- Routes ----
app.use('/api', healthRouter);
app.use('/api/users', usersRouter);

// ---- Error handler ----
app.use((err, _req, res, _next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ---- Start ----
app.listen(PORT, () => {
  console.log(`\n  🚀  Server running at http://localhost:${PORT}`);
  console.log(`  📡  Environment: ${process.env.NODE_ENV || 'development'}\n`);
});
