/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\settings\network\index.ts
 * @Description: 网络请求
 */
/** 请求头 */
export enum EnumContentType {
  json = 'application/json;charset=UTF-8',
  formData = 'multipart/form-data;charset=UTF-8',
  formUrlencoded = 'application/x-www-form-urlencoded;charset=UTF-8',
}
/** 请求超时时间 */
export const REQUEST_TIMEOUT = 30 * 1000

/** 错误信息的显示时间 */
export const ERROR_MSG_DURATION = 3 * 1000

/** 请求超时的错误code(为固定值：ECONNABORTED) */
export const REQUEST_TIMEOUT_CODE = 'ECONNABORTED'

/** 请求超时的错误文本 */
export const REQUEST_TIMEOUT_MSG = '请求超时!'

/** 网络不可用的code */
export const NETWORK_ERROR_CODE = 'ERR_NETWORK'

/** 网络不可用的错误文本 */
export const NETWORK_ERROR_MSG = '网络不可用!'

/** 请求不成功各种状态的错误 */
export const ERROR_STATUS = {
  400: '请求出现语法错误!',
  401: '用户未授权!',
  403: '服务器拒绝访问!',
  404: '请求的资源不存在!',
  405: '请求方法未允许!',
  408: '网络请求超时!',
  500: '服务器内部错误!',
  501: '服务器未实现请求功能!',
  502: '错误网关!',
  503: '服务不可用!',
  504: '网关超时!',
  505: 'http版本不支持该请求!',
}

/** 请求不成功各种状态的错误 */
export const ERROR_LOGIC_CODE = {
  200: '操作成功',
  10500: '未知错误，请联系管理员检查系统日志',
  10404: '您请求的资源未找到',
  10416: '您的参数不符合要求',
  10417: '该id不存在',
  10503: '请求提交失败，请稍后再试',
  10504: '输入参数为空',
  10401: '更多数据，请您登录查看！',
  10406: '访问次数超过今日最大访问限制！',
  114514: '请求中包含不安全的内容',
  10700: '根据相关法律法规部分搜索结果不予显示',
  10403: '您无权访问这个接口',
  10601: '您的解锁次数耗尽',
  10602: '表单信息校验失败的具体原因',
  10000: '这是实例',
}
