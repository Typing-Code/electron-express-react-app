const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../../db/db.json')
const db = low(adapter)
const { nanoid } = require("nanoid")

exports.index = function (req, res) {
    res.json({ "status": "OK" });
};

exports.getPosts = function (req, res) {
    let posts = db.get("posts").value()
    res.json(posts);
};

exports.addPost = function (req, res) {
    let post = db.get('posts')
        .push({ id: nanoid(), title: req.body.title })
        .write()
    res.json(post);
};

exports.updatePost = function (req, res) {
    let post = db.get('posts')
        .find({ id: req.params.id })
        .assign({ title: req.body.title })
        .write()
    res.json(post);
};

exports.deletePost = function (req, res) {
    let post = db.get('posts')
        .remove({ id: req.params.id })
        .write()
    res.json(post);
};