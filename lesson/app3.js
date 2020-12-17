var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var v2Url = 'https://www.v2ex.com/'

var app = express();
app.get('/', (req, res, next)=> {
  superagent.get(v2Url)
    .end((err, sres)=> {
      if(err) {
        return next(err)
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#Main .cell.item .topic-link').each(function (idx, element) {
        var $element = $(element);
        items.push({
          href: 'https://www.v2ex.com' + $element.attr('href'),
          title: $element.text()
        });
      });
      
      res.send(items);
      // fs.writeFile('v2.json', items, (err)=> {
      //   if(err) throw err
      // })
    })
})

app.listen(3000, (req, res)=> {
  console.log('app is running at port 3000');
})