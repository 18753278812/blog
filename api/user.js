import request from '~/plugins/axios'

export function login(data) {
  return request({
    url: 'http://127.0.0.1:8848/port/login',
    method: 'post',
    data: data
  })
}

export function user(params) {
  return request({
    url: 'http://127.0.0.1:8848/port/user',
    params: params
  })
}

export function logout() {
  return request({
    url: 'http://127.0.0.1:8848/port/logout'
  })
}