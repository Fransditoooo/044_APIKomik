const db = require('../models');

async function getAllGenre(req, res) {
    try {
        const genres = await db.Genre.findAll();
        res.status(200).json(genres);
    } catch (err) {
        console.error("Error fetching genres:", err.message);
        res.status(500).json({ error: "Failed to fetch genres" });
    }
}

