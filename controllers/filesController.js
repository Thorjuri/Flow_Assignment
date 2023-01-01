const FilesService = require("../services/filesService");

class FilesController {
    filesService = new FilesService();

    addExtensions = async(req, res)=> {
        const { board, extension, vaild } = req.body;
        console.log(extension)
        const data = await this.filesService.addExtensions(board, extension, vaild);
        res.status(201).send(data);
    };
};

module.exports = FilesController;