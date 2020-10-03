import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/fotic-admin-template/table/list',
    method: 'get',
    params
  })
}
