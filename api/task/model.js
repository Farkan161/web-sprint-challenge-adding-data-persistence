// build your `Task` model here
const db = require('../../data/dbConfig');

const getTasks = () => {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description');
};

const getTaskById = (id) => {
  return db('tasks').where({ task_id: id }).first();
};

const addTask = (task) => {
  return db('tasks').insert(task).then(([id]) => getTaskById(id));
};

module.exports = { getTasks, addTask };
