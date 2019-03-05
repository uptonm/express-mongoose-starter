import express from 'express';
const router = express.Router();
import { getHealth } from '../controllers/controller';

router.get('/health', getHealth);

export default router;
