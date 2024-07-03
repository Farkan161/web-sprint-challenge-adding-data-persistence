// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = () => {
  return db('projects');
};

const getProjectById = (id) => {
  return db('projects').where({ project_id: id }).first();
};

const addProject = (project) => {
  return db('projects').insert(project).then(([id]) => getProjectById(id));
};

module.exports = { getProjects, addProject };
