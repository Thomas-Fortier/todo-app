import Todo from '../models/Todo.js';

export default class TodoController {
  static async findAll(req, res, next) {
    res.status(200).json(await Todo.find());
  }

  static async post(req, res, next) {
    let newTodo = new Todo({ value: req.body.value });

    // Post coordinate
    newTodo.save(error => {
      if (error)
        res.status(400).json({ error, status: 'Not saved' });
    });

    res.status(200).json(newTodo);
  }

  static async delete(req, res, next) {
    const id = req.params.id;
    
    Todo.findByIdAndDelete(id, error => {
      if (error)
        res.status(400).json({ error, status: 'Not deleted' });
    });

    res.status(200).json(id);
  }
}