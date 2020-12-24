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
  var products = [
    { _id: 154, name: '笔记本电脑' },
    { _id: 155, name: '耳机' },
    { _id: 156, name: '台式电脑' }
  ]
  // // 添加数据
  // dbo.collection('products').insertMany(products, (err, res)=> {
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

  // 排序 1：正序   -1: 倒序
  // var sortStr = {age: 1}
  // dbo.collection('site').find().sort(sortStr).toArray((err, res)=> {
  //   if(err) throw err;
  //   console.log(res);
  //   db.close();
  // })

  // 分页 limit()  跳过 skip()
  // dbo.collection('site').find({}).limit(1).skip(2).toArray((err, res)=> {
  //   if(err) throw err;
  //   console.log(res);
  //   db.close();
  // })

  // 左连接
  // dbo.collection('orders').aggregate([
  //   {
  //     $lookup: {
  //       from: 'products',
  //       localField: 'product_id',
  //       foreignField: '_id',
  //       as: 'order_details'
  //     }
  //   }
  // ]).toArray((err, res)=> {
  //   if(err) throw err;
  //   console.log(JSON.stringify(res));
  //   db.close(); 
  // })

  // 删除集合
  // dbo.collection('test').drop((err, delOk)=> {
  //   if(err) throw err;
  //   if(delOk) {
  //     console.log('删除成功！');
  //     db.close();
  //   }
  // })

  
})