const { Files } = require('../models');
const { Op } = require("sequelize");
require("dotenv").config();

class FilesRepository {

    checkExtensions = async(board, extension)=> {
        const data = await Files.findOne({ where: { board, extension } }) ;
        return data;
    };

    addExtensions = async(board, extension, type, vaild)=> {
        const data = await Files.create({ board, extension, vaild });
        return data;
    };
};

module.exports = FilesRepository;
