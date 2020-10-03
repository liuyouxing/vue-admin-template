import request from '@/utils/request'

export function creatProject(params) {
  return request({
    url: '/fotic-admin-template/project/creatProject',
    method: 'post',
    data:params
  })
}
