import express from 'express'
import ncs from 'nocopyrightsounds-api'
import { isValidNum } from '../helpers/parameterValidator.js'
import { requestVarify } from '../middleware/auth.js'
export const router = express.Router()


// Default pages,
router.get('/:pageNum', requestVarify, async (req, res) => {
    const pageNum = req.params.pageNum
    if (isValidNum(pageNum)) {
        try {
            const songs = await ncs.getSongs(pageNum)
            res.status(200).send(songs)
        } catch (error) {
            res.status(500).json({ Error: error })
        }
    } else {
        res.status(400).json({ Error: `Invalid parameter for page number:${pageNum}` })
    }
})
