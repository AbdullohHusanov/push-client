let express = require('express')
let path = require('path')
let app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, () => console.log('8080.....'))