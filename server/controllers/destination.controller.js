const { createDestination } = require('../services/destination.service');
const { Destination } = require('../models/destination.model')


//then/catch will run code and get a response later
const handleCreateDestination = async (req, res) => {
    try {
        const newDestination = await createDestination(req.body);
        return res.json(newDestination);
    } catch (err) {
        return res.status(400).json(err);
    }
}

//async/await will pause code and continue when a return is received
const getAllDestinations = async (req, res) => {
    //attempt to run this code
    try {
        //await pauses operation until a return occurs
        const destinations = await Destination.find(); //the first line of code in .then/.catch functions 
        return res.json(destinations); //the rest of .then
        //catch err if any
    } catch (err) {
        return res.status(400).json(err);
    }

}

const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        return res.json(destination);
    } catch (err) {
        return res.status(400).json(err);
    }

}

const deleteDestinationById = async (req, res) => {
    try {
        const deletedDestination = await Destination.findByIdAndDelete(req.params.id);
        return res.json(deletedDestination);
    } catch (err) {
        return res.status(400).json(err);
    }

}

const updateDestinationById = async (req, res) => {
    try {
        const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
        });
        return res.json(updatedDestination);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = {
    handleCreateDestination,
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    updateDestinationById,
}