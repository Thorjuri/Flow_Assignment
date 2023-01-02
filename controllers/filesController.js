const FilesService = require("../services/filesService");

class FilesController {
    filesService = new FilesService();

    addExtensions = async(req, res)=> {
        const { board, extension, valid } = req.body;
        console.log(board, extension, valid)
        const data = await this.filesService.addExtensions(board, extension, valid);
        res.status(201).send(data);
    };

    deleteExtensions = async(req, res)=> {
        const { board, extension, valid } = req.body;
        const data = await this.filesService.deleteExtensions(board, extension, valid);
        res.status(201).send(data);
    };
};

module.exports = FilesController;