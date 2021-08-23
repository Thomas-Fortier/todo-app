import express from 'express';
import TodoController from '../controllers/todo.controller.js';

const router = express.Router();

// Routes
router.route('/').get(TodoController.findAll);
router.route('/').post(TodoController.post);
router.route('/:id').delete(TodoController.delete);

export default router;