import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

const port = 3000
const app = express()
app.use(cors({
    // origin: 'http://127.0.0.1:5173'
    origin: '*'
}))
app.use(express.json())

// Routers,
import { router as defaultRouter } from './routes/defaultRouter.js'
import { router as genreRouter } from './routes/genreRouter.js'
import { router as moodRouter } from './routes/moodRouter.js'
import { router as searchRouter } from './routes/searchRouter.js'
import { router as lost } from './routes/lost.js'
app.use('/library', defaultRouter)
app.use('/genre', genreRouter)
app.use('/mood', moodRouter)
app.use('/search', searchRouter)
app.use('/', lost)

// Start server,
app.listen(port, () => console.log(`Server running on port:${port}`))
