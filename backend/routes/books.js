const express = require('express')

const router = express.Router()

// GET all books
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all books' })
})

// GET a single book
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Get a single book' })
})

// POST a new book
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new book' })
})

// DELETE a book
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a book' })
})

// UPDATE a book
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a book' })
})

module.exports = router