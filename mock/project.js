module.exports = [
  {
    url: '/fotic-admin-template/project/creatProject',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          msg: "创建成功！"
        }
      }
    }
  }
]
