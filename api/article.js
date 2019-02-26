import request from '~/plugins/axios'

console.info()
// 发布文章接口
export function publish(data) {
  return request({
    url: '/port/publish',
    method: 'post',
    data: data
  })
}

// 获取文章列表接口
export function getArticleList(data) {
  return request({
    url: '/port/getArticleList',
    method: 'post',
    data: data
  })
}

// 获取文章详情
export function getArticleDetail(data) {
  return request({
    url: '/port/getArticleDetail',
    params: data
  })
}