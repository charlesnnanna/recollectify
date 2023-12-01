import express from 'express';

import { getUsers, getUser, createUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
// router.patch('/:id', updatePost);
router.delete('/:id', deleteUser);

export default router;