import express from 'express';
import { createTransaction } from './../controllers/transactionController';

const router = express.Router();

router.route('/create/:clientId').post(createTransaction);

export default router;
