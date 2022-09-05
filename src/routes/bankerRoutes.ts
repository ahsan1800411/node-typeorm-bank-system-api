import express from 'express';
import {
  connectBankerToClient,
  createBanker,
} from '../controllers/bankerController';

const router = express.Router();

router.route('/create').post(createBanker);
router.route('/:bankerId/client/:clientId').put(connectBankerToClient);

export default router;
