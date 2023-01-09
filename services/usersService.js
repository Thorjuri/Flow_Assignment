const UsersRepository = require("../repositories/usersRepository");
require("dotenv").config();

class UsersService {
    usersRepository = new UsersRepository();
    
};

module.exports = UsersService;
