const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

// Create new exercise
router.post('/', (req, res) => {
  const exercise = new Exercise(req.body);

  exercise.save()
    .then(exercise => res.status(201).json(exercise))
    .catch(err => res.status(400).json(err));
});

// Delete exercise
router.delete('/:exerciseId', (req, res) => {
  Exercise.findByIdAndDelete(req.params.exerciseId)
    .then(exercise => res.status(200).json(exercise))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
