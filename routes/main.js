const express = require('express');
const routes = express.Router()

routes.get("/", async(req, res)=>{
    res.render("index")
})

routes.get("/About", async(req, res)=>{
    res.render("About")
})

routes.get("/blog", async(req, res)=>{
    res.render("blog")
})

routes.get("/Projects", async(req, res)=>{
    res.render("Projects")
})


module.exports = routes