const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    'title|1': ['大唐西域记','猫妖传','唐律','狄仁杰'],
    'status|1': ['published', 'draft', 'deleted'],
    'author|1': ['孙悟空','猪八戒','沙僧','唐僧'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/fotic-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
