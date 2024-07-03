// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks.map(task => ({
      ...task,
      task_completed: Boolean(task.task_completed)
    })));
  } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' });
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await Task.addTask(req.body);
    res.status(201).json({
      ...task,
      task_completed: Boolean(task.task_completed)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
});

module.exports = router;
