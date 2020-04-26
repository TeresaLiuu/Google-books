const axios = require("axios");
const db = require("../models");
const path = require("path");
const express = require(`express`);
const app = express();



app.get("/api/books", (req, res) => {
    db.Book.find().then(
        (booksData) => {
            res.json(booksData);
        }
    ).catch(
        (err) => {
            res.json({ error: err });
        }
    );
});

app.post("/search", (req, res) => {
    let bookTitle = req.body.title.replace(/\s/g, "+");
    axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
    ).then(
        (response) => {
            res.json(response.data.items)
        }
    ).catch(
        (err) => {
            res.json({ error: err })
        }
    );
});

app.post("/api/books", (req, res) => {
    db.Book.create({
        title:req.body.title,
        author:req.body.author[0],
        link:req.body.link,
        image:req.body.image
    }).then(
        (response) => {
            res.json({ successful: response });
        }
    ).catch(
        (err) => {
            res.json({ error: err });
        }
    );
});

app.delete("/api/books/:id", (req, res) => {
    db.Book.findByIdAndDelete(req.params.id).then(
        (response) => {
            res.json({ successful: response });
        }
    ).catch(
        (err) => {
            res.json({ error: err });
        }
    );
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
