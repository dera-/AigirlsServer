var mongodb = require(mongodb);
var dbConf = require(../../conf/MongoDbConfig.js);
var MongoDbConnection = function(dbName, collectionName) {
  var server = new mongodb.Server(dbConf.host, dbConf.port);
  this.db = new mongodb.Db(dbName, server, {safe: true});
  this.collection = this.db.collection(collectionName);
}

module.exports = MongoDbConnection;