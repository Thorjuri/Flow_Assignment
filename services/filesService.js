const FilesRepository = require("../repositories/filesRepository");
require("dotenv").config();

class FilesService {
    filesRepository = new FilesRepository();
    err = new Error('filesService Error');

    addExtensions = async(board, extension, valid)=> {
        const check = await this.filesRepository.checkExtensions(board, extension);
        if(!check){
            const data = await this.filesRepository.addExtensions(board, extension, valid);
            return { data, message:`확장자 ${extension} 추가 완료`};
        }else if(check.valid === false){
            await this.filesRepository.updateExtensions(board, extension);
            return { message: `확장자 ${extension} 활성화 완료`}
        }else{
            // this.err.status = 401;
            // this.err.message = `확장자 ${extension} 는 이미 추가되어 있습니다.`
            // throw this.err;
            return { message: `확장자 ${extension} 는 이미 추가되어 있습니다.`}
        };
    };

    deleteExtensions = async(board, extension, valid)=> {
        const check = await this.filesRepository.checkExtensions(board, extension);
        if(!check){
            this.err.status = 401;
            this.err.message = `확장자 ${extension} 등록 내역이 존재하지 않습니다.`;
        }else if(check.valid === false){
            return { message: `확장자 ${extension}은 이미 삭제되었습니다.`};
        }else{
            await this.filesRepository.deleteExtensions(board, extension, valid);
            return { message: `확장자 ${extension} 삭제 완료` };
        };
    };
};

module.exports = FilesService;
