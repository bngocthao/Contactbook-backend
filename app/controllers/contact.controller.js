const ContactService = require("../services/contact.service");

exports.create = async(req, res, next) => {
    res.send({message: 'Create handler'});

    // bt2
    // if (!req.body?.name) {
    //     return next(new ApiError(400, "Name can not be empty"));
    // }

    // try {
    //     const ContactService = new ContactService(MongoDB.client);
    //     const document = await ContactService.create(req.body);
    //     return res.send(document);
    // } catch (error) {
    //     return next(
    //         new ApiError(500, "An error occurred while creating the contact")
    //     );
    // }
};


exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOnde handler" });
};

exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};