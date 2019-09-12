const db = require("./data/db-config.js")

const validateInfo = (req,res,next) => {
    const {body} = req;

    if(!body.vinNumber || !body.make || !body.model || !body.mileage ) {
        res.status(400).json({message: "please provide a vinNumber, make, model, and mileage amount"})
    }
    else if(typeof body.vinNumber !== "string") {
        res.status(400).json({message: "VIN Number must be a string"})
    }
    else if(typeof body.mileage !== "number") {
        res.status(400).json({message: "VIN Number must be a number"})
    }
    else {
        next();
    }

}

const validateID = async(req,res,next) => {
    const {id} = req.params;

    try {
        const car = await db("cars")
            .where({id})
            .first()
        if (car) {
            req.car = car;
            next();
        } else {
            res.status(404).json({message:"Invalid car ID"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error; could not validate ID"})
    }
}

module.exports = {
    validateInfo,
    validateID
}