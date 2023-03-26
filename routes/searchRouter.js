import express from 'express'
import ncs from 'nocopyrightsounds-api'
export const router = express.Router()

// Searches,
router.get('/:songName', async (req, res) => {
    const songName = req.params.songName
    try {
        const songs = await ncs.search({ search: songName })
        res.status(200).send(songs)
    } catch (error) {
        res.status(500).json({ Error: error })
    }
})
