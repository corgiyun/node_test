var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url).then(conn=> {
  var test = conn.db('lesson').collection('site2');
  // 增加
  test.insertOne({site: 'lesson'}).then(res=> {
    // 查询
    return test.find().toArray().then(arr=> {
      console.log(arr);
    })
  }).then(()=> {
    // 修改
     return test.updateOne({site: 'lesson'}, {$set: {site: 'lesson2'}})
  }).then(res=> {
    // 查询
    return test.find().toArray().then(arr=> {
      console.log(arr);
    })
  }).then(()=>{
    // 删除
    return test.deleteOne({site: 'lesson2'})
  }).then(()=> {
    //查询
    return test.find().toArray.then()(arr=> {
      console.log(arr);
    })
  }).catch(err=> {
    console.log(`数据库操作失败${err.message}`);
  }).finally(()=> conn.close())
}).catch(err=> {
  console.log('数据库连接失败！');
})
