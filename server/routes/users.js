import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

/**
 * GET /api/users/me
 * Returns the authenticated user's profile.
 * Protected — requires a valid Supabase access token.
 */
router.get('/me', requireAuth, (req, res) => {
  const { id, email, created_at, user_metadata } = req.user;
  res.json({ id, email, created_at, user_metadata });
});

export default router;
