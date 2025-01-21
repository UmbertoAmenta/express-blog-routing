const express = require("express")

const router = express.Router()

// Index
router.get("/", (req, res) => {
    res.send("Ricettario")
    // res.json(postsData)
})

// Show
router.get("/:id", (req, res) => {
    res.send(`Ricetta: ${req.params.id}`)
})

// Store
router.post("/", (req, res) => {
    res.send("Aggiunta di una nuova ricetta")
})

// Update
router.put("/:id", (req, res) => {
    res.send(`Modifica integrale dela ricetta n° ${req.params.id}`)
})

// Modify
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale della ricetta n° ${req.params.id}`)
})

// Delete
router.delete("/:id", (req, res) => {
    res.send(`Eliminazione della ricetta n° ${req.params.id}`)
})

module.exports = router