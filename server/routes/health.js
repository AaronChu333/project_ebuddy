import { Router } from 'express';

const router = Router();

/**
 * GET /api/health
 * Simple health check — useful for monitoring and the dashboard status card.
 */
router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

export default router;
