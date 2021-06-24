const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = express.Router()
const axios = require('axios')
const db = require('./db')
const { Podcast, Episode, UserPodcast } = require('./db/models')

router.post('/', async (req, res, next) => {
  const { url, userId } = req.body
  try {
    const resp = await axios({ method: 'get', url })

    let podcast = await Podcast.findOne({ where: { title: resp.data.title } })

    if (podcast) {
      await UserPodcast.create({ userId, podcastId: podcast.id })
      res.json({ podcast })
    } else {
      const {
        title: podcastTitle,
        description: podcastDescription,
        icon: iconUrl,
        feed_url: feedUrl,
        items: podcastEpisodes
      } = resp.data

      podcast = await Podcast.create({ title: podcastTitle, description: podcastDescription, iconUrl, feedUrl })

      await UserPodcast.create({ userId, podcastId: podcast.id })

      const episodeObjects = podcastEpisodes.map(({
        title,
        content_text: description,
        image: imageUrl,
        attachments
      }) => {
        const [audioData] = attachments
        const { url: audioUrl } = audioData

        return ({
          title,
          description,
          imageUrl,
          audioUrl,
          podcastId: podcast.id
        })
      })

      const episodes = await Episode.bulkCreate(episodeObjects)

      const rawPodcastObj = podcast.get({ plain: true })
      rawPodcastObj.episodes = episodes

      res.json({ podcast: rawPodcastObj })
    }
  } catch (err) {
    next(err)
  }
})

const PORT = process.env.PORT || 5000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/api/podcasts', router)

db.sync()

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
