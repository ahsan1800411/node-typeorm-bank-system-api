import express from 'express';
import {
  createClient,
  deleteClient,
  fetchClients,
} from './../controllers/clientController';

const router = express.Router();

router.route('/create').post(createClient);
router.route('/:id').delete(deleteClient);
router.route('/').get(fetchClients);

export default router;
