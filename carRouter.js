const express = require("express");

const router = express.Router();

const db = require("./data/db-config.js")

// import middleware
const {
    validateInfo,
    validateID
} = require("./middleware.js")

// get all entries
router.get("/", async (req,res) => {
    try {
        const response = await db("cars");
        res.status(200).json(response)
    }
    catch(error) {
        res.status(500).status({error: "Server error; could not retrieve data"})
    }

})

// get entry by id
router.get("/:id",validateID, (req,res) => {
    const {car} = req;
    res.status(200).json(car)
})

// create an entry
router.post("/",validateInfo,async(req,res) =>{
    const{body} = req;
    const [id] = await db("cars").insert(body,"id");
    res.status(200).json(id)
})

module.exports = router;