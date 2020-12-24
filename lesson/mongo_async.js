var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

const updateObj = async() => {
  var conn = null;
  try {
    conn = await MongoClient.connect(url);
    console.log(`数据库已连接`);
    const test = conn.db('lesson').collection('site2');
    // 增加
    await test.insertOne({sub: 'test'});
    // 查询
    var arr = await test.find().toArray();
    console.log(arr);
    // 修改
    await test.updateOne({sub: 'test'}, {$set: {sub: 'test2'}});
    // 查询
    arr = await test.find().toArray();
    console.log(arr);
    // 删除
    await test.deleteOne({sub: 'test2'});
    // 查询
    arr = await test.find().toArray();
    console.log(arr);
  } catch(err) {
    console.log(`Error: ${err.message}`);
  } finally {
    if(conn != null) conn.close()
  }
};

updateObj();