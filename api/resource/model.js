// build your `Resource` model here
const db = require('../../data/dbConfig');

const getResources = () => {
  return db('resources');
};

const getResourceById = (id) => {
  return db('resources').where({ resource_id: id }).first();
};

const addResource = (resource) => {
  return db('resources').insert(resource).then(([id]) => getResourceById(id));
};

module.exports = { getResources, addResource };
