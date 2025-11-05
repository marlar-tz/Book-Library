const express = require('express')
const Book = require('../models/BookModel')

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
router.post('/', async (req, res) => {
    const { title, author, year, description } = req.body

    try {
        const book = await Book.create({ title, author, year, description })
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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