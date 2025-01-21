const express = require("express")
const app = express()
const port = 3000

const postsData = require("./data/posts.js")

app.use(express.static("pubblic"))

app.get("/", (req, res) => {
  res.send("Server del blog")
    res.send(req.params)
})

app.get("/menu", (req, res) => {
    res.json(postsData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})    