const mysql = require('mysql');
const connection = mysql.createConnection({
  host  : '192.168.99.100', //docker machine IP
  user  : 'root',
  password : 'zega9524',
  port : 3306,
  database : 'test'
});

connection.connect();

exports.getData = function (ctx, next) {
  connection.query('select * from User', async function (err, rows, fields) {
    ctx.body = { foo : rows};
    console.log(rows);
    console.log('왜안돼');
  });
};

connection.end();
