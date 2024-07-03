// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.getResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get resources' });
  }
});

router.post('/', async (req, res) => {
  try {
    const resource = await Resource.addResource(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create resource' });
  }
});

module.exports = router;
