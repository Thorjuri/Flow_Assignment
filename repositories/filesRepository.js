const { Files } = require('../models');
const { Op } = require("sequelize");
require("dotenv").config();

class FilesRepository {

    checkExtensions = async(board, extension)=> {
        const data = await Files.findOne({ where: { board, extension } }) ;
        return data;
    };

    addExtensions = async(board, extension, valid)=> {
        const data = await Files.create({ board, extension, valid });
        return data;
    };

    updateExtensions = async(board, extension)=> {
        await Files.update({ valid: true }, { where: { board, extension } });
    };

    deleteExtensions = async(board, extension, valid)=> {
        await Files.update({ valid }, { where: { board, extension } });
    };
};

module.exports = FilesRepository;
