import express from 'express'
export const router = express.Router()

router.get('/:etc', (req, res) => res.status(404).send('<h2>You lost!</h2>'))
