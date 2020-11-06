const express = require('express')

const app = express()

app.get('/api/info', (req,res) => {
    res.json({
        name: '一线蓝光'
    })
})


app.listen('9092')