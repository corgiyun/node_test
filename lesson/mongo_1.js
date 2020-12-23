var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db)=> {
  if(err) throw err;
  var dbo = db.db('lesson');
  var myObj = [
    { name: '李四', age: 20 },
    { name: '王五', age: 22 },
    { name: '赵六', age: 24 },
  ];
  // 添加数据
  // dbo.collection('site').insertMany(myObj, (err, res)=> {
  //   if(err) throw err;
  //   console.log(`共插入${res.insertedCount}条数据`);
  //   db.close();
  // })

  // 查找数据
  var whereStr = { name: '李四' };
  // dbo.collection('site').find({}).toArray((err, res)=> {
  //   if(err) throw err;
  //   console.log(res);
  //   db.close();
  // })

  // 修改数据 updateOne updateMany
  // var updateStr = { $set: {url: 'https://www.baidu.com' }};
  // dbo.collection('site').updateOne(whereStr, updateStr, (err, res)=> {
  //   if(err) throw err;
  //   console.log('更新成功');
  //   db.close();
  // })

  // 删除数据 deleteOne deleteMany
  // dbo.collection('site').deleteOne(whereStr, (err, res)=> {
  //   if(err) throw err;
  //   console.log('删除成功');
  //   db.close();
  // })

  // 排序
  var sortStr = {age: 1}
  dbo.collection('site').find().sort(sortStr).toArray((err, res)=> {
    if(err) throw err;
    console.log(res);
    db.close();
  })
})