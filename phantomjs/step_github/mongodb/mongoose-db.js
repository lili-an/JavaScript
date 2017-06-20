require('./connect');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*定义模式*/
var Account_Schema = new Schema({
    name: String,
    password: String,
    email: String
    }, {
      versionKey: false
    });

/*定义模型Account，数据库存的是Accounts*/
var Accounts = mongoose.model("Account", Account_Schema);
exports.Accounts=Accounts;
