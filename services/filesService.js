const FilesRepository = require("../repositories/filesRepository");
require("dotenv").config();

class FilesService {
    filesRepository = new FilesRepository();
    err = new Error('filesService Error');

    addExtensions = async(board, extension, vaild)=> {
        const check = await this.filesRepository.checkExtensions(board, extension);
        if(!check){
            const data = await this.filesRepository.addExtensions(board, extension, vaild);
            return { data, message:"확장자 추가 완료"};
        }else{
            this.err.status = 401;
            this.err.message = `${extension} 는 이미 추가되어 있습니다.`
            throw this.err;
        };
    };
};

module.exports = FilesService;
