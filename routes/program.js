const express = require('express');
const router = express.Router();
const Program = require('../models/program');

// Create new program
router.post('/', (req, res) => {
  const program = new Program(req.body);

  program.save()
    .then(program => res.status(201).json(program))
    .catch(err => res.status(400).json(err));
});

// Get all programs
router.get('/', (req, res) => {
  Program.find({})
    .populate('exercises')
    .exec()
    .then(programs => res.status(200).json(programs))
    .catch(err => res.status(400).json(err));
});

// Get single program
router.get('/:programId', (req, res) => {
  Program.findById(req.params.programId)
    .populate('exercises')
    .exec()
    .then(program => res.status(200).json(program))
    .catch(err => res.status(400).json(err));
});

// Update program
router.put('/:programId', (req, res) => {
  Program.findByIdAndUpdate(req.params.programId, req.body, { new: true })
    .then(program => res.status(200).json(program))
    .catch(err => res.status(400).json(err));
});

// Delete program
router.delete('/:programId', (req, res) => {
  Program.findByIdAndDelete(req.params.programId)
    .then(program => res.status(200).json(program))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
