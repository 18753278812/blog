import request from '~/plugins/axios'

export function login(data) {
  return request({
    url: '/port/login',
    method: 'post',
    data: data
  })
}

export function user(params) {
  return request({
    url: '/port/user',
    params: params
  })
}

export function logout() {
  return request({
    url: '/port/logout'
  })
}