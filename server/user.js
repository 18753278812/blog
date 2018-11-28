const router = require('express').Router()
const mysql = require('./mysql')

// 用户信息
router.get('/user', (req, res) => {
  if (req.session.userName) {
    mysql('SELECT * FROM user_admin;').then(rows => {
      return res.json({
        data: rows,
        code: 123
      })
    }).catch(err => {
  
    })
  } else {
    return res.json({
      data: '用户信息已失效',
      code: 666
    })
  }
})

// 登录
router.post('/login', (req, res, err) => {
  mysql(`SELECT username, password FROM user_admin where username='${req.body.username}';`).then(result => {
    if (result.length !== 0 && result[0].password === req.body.password) {
      req.session.userName = 'admin'
      return res.json({
        data: result[0],
        code: 200
      })
    } else if (result.length !==0) {
      return res.json({
        data: '用户名密码不正确',
        code: 200
      })
    } else if (result.length === 0) {
      return res.json({
        data: '账号不存在',
        code: 200
      })
    } else {
      console.log(1)
      return res.json({
        data: err,
        code: 500
      })
    }
  })
})

module.exports = router
