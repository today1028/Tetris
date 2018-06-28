const mysql = require('mysql');
const connection = mysql.createConnection({
  host  : '192.168.99.100', //docker machine IP
  user  : 'root',
  password : 'zega9524',
  port : 3306,
  database : 'test'
});

exports.getData = async (ctx, next) => {
  const results = await new Promise((resolve, reject) => {
    connection.query('select * from User', (err, rows, fields) => {
      if(err) reject(err)
      resolve(rows)
    })
  })
  ctx.body = results
  await ctx.render('login', { posts : results })
}
