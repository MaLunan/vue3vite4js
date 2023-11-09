// 商品列表
import request from '@/utils/request'
let merchandiseBaseUrl='MetaWorks/api/v1/merchandise/'
let dictionaryBaseUrl='/MetaWorks/api/v1/dictionary/'
let ossBaseUrl= '/MetaWorks/api/v1/s3/'
//获取商品列表
export function productList (data) {
  return request({
    url: merchandiseBaseUrl + "list",
    method: 'post',
    data
  })
}
//商品数据导入
export function productImport (data) {
  return request({
    url: merchandiseBaseUrl + "import",
    method: 'post',
    data
  })
}
//获取枚举信息
export function listDescendants (params) {
  return request({
    url: dictionaryBaseUrl + "listDescendants",
    method: 'get',
    params
  })
}
//获取详情信息
export function detail (params) {
  return request({
    url: merchandiseBaseUrl + "detail",
    method: 'get',
    params
  })
}
//智能回复
export function documentsCreate (data) {
  return request({
    url: merchandiseBaseUrl + "documentsCreate",
    method: 'post',
    data
  })
}
// 创建商品
export function addProduct (data) {
    return request({
      url: merchandiseBaseUrl + "add",
      method: 'post',
      data
    })
  }
// 修改商品
export function editProduct (data) {
    return request({
      url: merchandiseBaseUrl + "edit",
      method: 'post',
      data
    })
  }
// 上传商品图片
export function uploadAwsFile (data) {
    return request({
      url: ossBaseUrl + "uploadAwsFile",
      method: 'post',
      data,
      
    })
  }
  