import express from 'express'
import ncs from 'nocopyrightsounds-api'

export const router = express.Router()

router.get('/:mood/:pageNum', async (req, res) => {
    const mood = req.params.mood
    const m = ncs.Mood.Epic

    try {
        const genreSongs = await ncs.search(
            {
                mood: m,
            },
            // Page number here
            req.params.pageNum
        )
        res.send(genreSongs)
    } catch (error) {
        res.status(500).json({ Error: error })
    }
})

// Angry = 1,
//     Dark,
//     Dreamy,
//     Epic,
//     Euphoric,
//     Energetic,
//     Fear,
//     Funny,
//     Glamorous,
//     Gloomy,
//     Happy,
//     Hopeful,
//     LaidBack,
//     Mysterious,
//     Peaceful,
//     Quirky,
//     Relaxing,
//     Restless,
//     Romantic,
//     Sad,
//     Scary,
//     Sexy,
//     Suspense,
//     Weird
