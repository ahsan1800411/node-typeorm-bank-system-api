import express from 'express';
import clientRoutes from './clientRoutes';
import bankerRoutes from './bankerRoutes';
import transactionRoutes from './transactionRoutes';

const router = express.Router();

router.use('/client', clientRoutes);
router.use('/banker', bankerRoutes);
router.use('/transactions', transactionRoutes);

export default router;
