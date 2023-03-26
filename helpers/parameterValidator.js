const validGenres = [
    'Bass',
    'Chill',
    'DrumBass',
    'Drumstep',
    'Dubstep',
    'EDM',
    'Electronic',
    'FutureHouse',
    'Hardstyle',
    'House',
    'Indie',
    'MelodicDubstep',
    'Unknown',
    'Trap',
    'GlitchHop',
    'Phonk',
    'FutureBass',
    'BassHouse',
]

const validMood = [
    'Angry',
    'Dark',
    'Dreamy',
    'Epic',
    'Euphoric',
    'Energetic',
    'Fear',
    'Funny',
    'Glamorous',
    'Gloomy',
    'Happy',
    'Hopeful',
    'LaidBack',
    'Mysterious',
    'Peaceful',
    'Quirky',
    'Relaxing',
    'Restless',
    'Romantic',
    'Sad',
    'Scary',
    'Sexy',
    'Suspense',
    'Weird',
]

// Checking if the page number is valid,
export const isValidNum = (value) => /^\d+$/.test(value)

// Checking if the genre is valid,
export const isValidGenre = (value) => validGenres.indexOf(value) >= 0

// Checking if the mood is valid,
export const isValidMood = (value) => validMood.indexOf(value) >= 0
