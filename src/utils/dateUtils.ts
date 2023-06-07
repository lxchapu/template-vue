import { format } from 'date-fns'

const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
const DATE_FORMAT = 'yyyy-MM-dd'

/**
 * 格式化日期时间
 * @param {number | Date} date
 * @param {string} formatStr
 */
export function formatDateTime(date: number | Date, formatStr: string = DATE_TIME_FORMAT) {
  return format(date, formatStr)
}

/**
 * 格式化日期
 * @param {number | Date} date
 * @param {string} formatStr
 */
export function formatDate(date: number | Date, formatStr: string = DATE_FORMAT) {
  return format(date, formatStr)
}
