import express from 'express'
import ncs from 'nocopyrightsounds-api'
export const router = express.Router()

// Default pages,
router.get('/:pageNum', async (req, res) => {
    try {
        const songs = await ncs.getSongs(req.params.pageNum)
        res.status(200).send(songs)
    } catch (error) {
        res.status(500).json({ Error: error })
    }
})
