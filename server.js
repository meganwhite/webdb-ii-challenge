const express = require("express");
const server = express();
const carRouter = require("./carRouter")

server.use(express.json());
server.use("/api/cars", carRouter);

server.get("/",(req,res) => {
    res.status(200).json({message: "up"})
});

module.exports = server;