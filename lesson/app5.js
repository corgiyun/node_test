var async = require('async');

var currentCount = 0;
var fetch = (url, callback)=> {
  var delay = parseInt((Math.random() * 10000000) % 2000, 10);
  currentCount ++ ;
  console.log('并发数：', currentCount, '当前url：', url, '耗时：', delay);
  setTimeout(()=> {
    currentCount --;
    callback(null, url+'html content')
  }, delay);
}

var urls = [];
for(var i = 0; i < 30; i ++) {
  urls.push('http://datasource_' + i);
};

async.mapLimit(urls, 10, (url, callback)=> {
  fetch(url, callback);
}, (err, result)=> {
  console.log('finally');
  console.log(result);
})