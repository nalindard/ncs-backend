import express from 'express'
import ncs from 'nocopyrightsounds-api'
export const router = express.Router()

// Genres,
router.get('/:genre/:pageNum', async (req, res) => {
    try {
        const songs = await ncs.search(
            {
                genre: ncs.Genre.House,
            },
            // Page number here
            2
        )
        res.status(200).send(songs)
    } catch (error) {
        res.status(500).json({ Error: error })
    }
})
// Bass = 1,
//     Chill,
//     DrumBass,
//     Drumstep,
//     Dubstep,
//     EDM,
//     Electronic,
//     FutureHouse,
//     Hardstyle,
//     House,
//     Indie,
//     MelodicDubstep,
//     Unknown,
//     Trap,
//     GlitchHop,
//     Phonk,
//     FutureBass,
//     BassHouse
