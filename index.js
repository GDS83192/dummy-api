const express = require('express')

const app = express()

app.listen(process.env.PORT || 3000, () => console.log('server running'));

app.get('/', (req, res) => {
    res.send('Api is running.')
    })

const posts = require('./posts')

app.get('/posts', (req, res) => {
    res.json(posts)
})