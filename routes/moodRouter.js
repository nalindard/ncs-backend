import express from 'express'
import ncs from 'nocopyrightsounds-api'
import { isValidMood, isValidNum } from '../helpers/parameterValidator.js'

export const router = express.Router()

// Moods,
router.get('/:mood/:pageNum', async (req, res) => {
    const mood = req.params.mood
    const pageNum = req.params.pageNum
    let selectedMood

    if (isValidMood(mood) && isValidNum(pageNum)) {
        switch (mood) {
            case 'Angry':
                selectedMood = ncs.Mood.Angry
                break
            case 'Dark':
                selectedMood = ncs.Mood.Dark
                break
            case 'Dreamy':
                selectedMood = ncs.Mood.Dreamy
                break
            case 'Epic':
                selectedMood = ncs.Mood.Epic
                break
            case 'Euphoric':
                selectedMood = ncs.Mood.Euphoric
                break
            case 'Energetic':
                selectedMood = ncs.Mood.Energetic
                break
            case 'Fear':
                selectedMood = ncs.Mood.Fear
                break
            case 'Funny':
                selectedMood = ncs.Mood.Funny
                break
            case 'Glamorous':
                selectedMood = ncs.Mood.Glamorous
                break
            case 'Gloomy':
                selectedMood = ncs.Mood.Gloomy
                break
            case 'Happy':
                selectedMood = ncs.Mood.Happy
                break
            case 'Hopeful':
                selectedMood = ncs.Mood.Hopeful
                break
            case 'LaidBack':
                selectedMood = ncs.Mood.LaidBack
                break
            case 'Mysterious':
                selectedMood = ncs.Mood.Mysterious
                break
            case 'Peaceful':
                selectedMood = ncs.Mood.Peaceful
                break
            case 'Quirky':
                selectedMood = ncs.Mood.Quirky
                break
            case 'Relaxing':
                selectedMood = ncs.Mood.Relaxing
                break
            case 'Restless':
                selectedMood = ncs.Mood.Restless
                break
            case 'Romantic':
                selectedMood = ncs.Mood.Romantic
                break
            case 'Sad':
                selectedMood = ncs.Mood.Sad
                break
            case 'Scary':
                selectedMood = ncs.Mood.Scary
                break
            case 'Sexy':
                selectedMood = ncs.Mood.Sexy
                break
            case 'Suspense':
                selectedMood = ncs.Mood.Suspense
                break
            case 'Weird':
                selectedMood = ncs.Mood.Weird
                break

            default:
                selectedMood = ncs.Mood.Epic
                break
        }

        try {
            const songs = await ncs.search(
                {
                    mood: selectedMood,
                },
                // Page number here
                Number(pageNum)
            )
            res.send(songs)
        } catch (error) {
            res.status(500).json({ Error: error })
        }
    } else {
        if (!isValidMood(mood)) {
            res.status(400).json({
                Error: `Invalid parameter for mood:${mood}`,
            })
        } else if (!isValidNum(pageNum)) {
            res.status(400).json({
                Error: `Invalid parameter for page number:${pageNum}`,
            })
        } else {
            res.status(400).json({
                Error: `Parameters you request is not valid. mood:${mood} && page_number:${pageNum}`,
            })
        }
    }
})

// Angry,
// Dark,
// Dreamy,
// Epic,
// Euphoric,
// Energetic,
// Fear,
// Funny,
// Glamorous,
// Gloomy,
// Happy,
// Hopeful,
// LaidBack,
// Mysterious,
// Peaceful,
// Quirky,
// Relaxing,
// Restless,
// Romantic,
// Sad,
// Scary,
// Sexy,
// Suspense,
// Weird
