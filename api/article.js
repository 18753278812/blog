import request from '~/plugins/axios'

export function publish(data) {
  return request({
    url: 'http://127.0.0.1:8848/port/publish',
    method: 'post',
    data: data
  })
}