import request from '~/plugins/axios'

// 发布文章接口
export function publish(data) {
  return request({
    url: 'http://127.0.0.1:8848/port/publish',
    method: 'post',
    data: data
  })
}

// 获取文章列表接口
export function getArticleList(data) {
  return request({
    url: 'http://127.0.0.1:8848/port/getArticleList',
    method: 'post',
    data: data
  })
}

// 获取文章详情
export function getArticleDetail(data) {
  return request({
    url: 'http://127.0.0.1:8848/port/getArticleDetail',
    params: data
  })
}