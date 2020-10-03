import request from '@/utils/request'

export function creatProject(params) {
  debugger
  return request({
    url: '/fotic-admin-template/project/creatProject',
    method: 'post',
    params
  })
}
