import axios from 'axios'
import Qs from 'qs'

// 创建axios实例

const service = axios.create({
  baseURL: 'http://123.56.217.0:8848', // api的base_url
  timeout: 50000, // 请求超时时间
  transformRequest: (data) => { // 格式化
    return Qs.stringify(data)
  }
})

// service.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
service.defaults.withCredentials = true

export default service