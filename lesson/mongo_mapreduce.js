var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('lesson');
  dbo.collection('posts').mapReduce(
    ()=> {
      emit(this.user_name, 1);
    },
    (key, values)=> Array.sum(values),
    {
      query: { status: 'active' },
      out: 'post_total'
    }
  ).find()


})