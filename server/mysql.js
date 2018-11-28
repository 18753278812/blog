var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'long_website'
})
connection.connect() // 数据库连接
module.exports = function (sql) {
  return new Promise(function (resolve, reject) {
    connection.query(sql, function (err, rows, fields) {
      resolve(rows)
    })
  }).catch(err => {
    
  })
}
// connection.end()