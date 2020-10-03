import request from '@/utils/request'

export function login(data) {
  debugger
  return request({
    url: '/fotic-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/fotic-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/fotic-admin-template/user/logout',
    method: 'post'
  })
}
