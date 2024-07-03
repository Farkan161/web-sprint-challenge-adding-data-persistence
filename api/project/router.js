// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.getProjects();
    res.json(projects.map(project => ({
      ...project,
      project_completed: Boolean(project.project_completed)
    })));
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await Project.addProject(req.body);
    res.status(201).json({
      ...project,
      project_completed: Boolean(project.project_completed)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create project' });
  }
});

module.exports = router;

