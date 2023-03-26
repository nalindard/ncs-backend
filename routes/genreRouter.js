import express from 'express'
import ncs from 'nocopyrightsounds-api'
import { requestVarify } from '../middleware/auth.js'
import { isValidGenre, isValidNum } from '../helpers/parameterValidator.js'

export const router = express.Router()

// Genres,
router.get('/:genre/:pageNum', requestVarify, async (req, res) => {
    const genre = req.params.genre
    const pageNum = req.params.pageNum
    let selectedGenre

    // If this giant switch statement questionable,
    // Look at above line in moodRouter.js page
    // ⚠️⚠️⚠️⚠️

    if (isValidGenre(genre) && isValidNum(pageNum)) {
        switch (genre) {
            case 'Bass':
                selectedGenre = ncs.Genre.Bass
                break
            case 'Chill':
                selectedGenre = ncs.Genre.Chill
                break
            case 'DrumBass':
                selectedGenre = ncs.Genre.DrumBass
                break
            case 'Drumstep':
                selectedGenre = ncs.Genre.Drumstep
                break
            case 'Dubstep':
                selectedGenre = ncs.Genre.Dubstep
                break
            case 'EDM':
                selectedGenre = ncs.Genre.EDM
                break
            case 'Electronic':
                selectedGenre = ncs.Genre.Electronic
                break
            case 'FutureHouse':
                selectedGenre = ncs.Genre.FutureHouse
                break
            case 'Hardstyle':
                selectedGenre = ncs.Genre.Hardstyle
                break
            case 'House':
                selectedGenre = ncs.Genre.House
                break
            case 'Indie':
                selectedGenre = ncs.Genre.Indie
                break
            case 'MelodicDubstep':
                selectedGenre = ncs.Genre.MelodicDubstep
                break
            case 'Unknown':
                selectedGenre = ncs.Genre.Unknown
                break
            case 'Trap':
                selectedGenre = ncs.Genre.Trap
                break
            case 'GlitchHop':
                selectedGenre = ncs.Genre.GlitchHop
                break
            case 'Phonk':
                selectedGenre = ncs.Genre.Phonk
                break
            case 'FutureBass':
                selectedGenre = ncs.Genre.FutureBass
                break
            case 'BassHouse':
                selectedGenre = ncs.Genre.BassHouse
                break

            default:
                selectedGenre = ncs.Genre.House
                break
        }

        try {
            const songs = await ncs.search(
                {
                    genre: selectedGenre,
                },
                Number(pageNum)
            )
            res.status(200).send(songs)
        } catch (error) {
            res.status(500).json({ Error: error })
        }
    } else {
        if (!isValidGenre(genre)) {
            res.status(400).json({
                Error: `Invalid parameter for genre:${genre}`,
            })
        } else if (!isValidNum(pageNum)) {
            res.status(400).json({
                Error: `Invalid parameter for page number:${pageNum}`,
            })
        } else {
            res.status(400).json({
                Error: `Parameters you request is not valid. genre:${genre} && page_number:${pageNum}`,
            })
        }
    }
})
