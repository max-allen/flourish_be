const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = express.Router()
const axios = require('axios')
const db = require('./db')

router.post('/', async (req, res, next) => {
  const { url } = req.body
  try {
    const resp = await axios({ method: 'get', url })
    res.json({ ...resp.data })
  } catch(err) {
    next(err)
  }
})

const PORT = process.env.PORT || 5000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/api', router)

db.sync()

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
