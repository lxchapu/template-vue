/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 王嘉哲
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\utils\common\file.ts
 * @Description: 文件操作
 */

/**
 * 下载文件到本地
 * @param data - 文件的blob数据
 * @param filename - 文件名
 */
export function downloadFileToLocal(blob: Blob, filename: string) {
  const url = window.URL || window.webkitURL
  const elA = document.createElement('a')
  document.body.appendChild(elA)

  elA.href = url.createObjectURL(blob)
  elA.download = filename
  elA.click()

  /** 释放链接 删除元素 */
  url.revokeObjectURL(elA.href)
  elA.parentElement!.removeChild(elA)
}

/**
 * base64 格式 转文件
 * @param base64 - base64 字符串
 * @param filename - 文件名
 * @returns { File } file - 文件
 */
export function base64ToFile(base64: string, filename: string) {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bytes = window.atob(arr[1]) // 解码base64
  let n = bytes.length
  const ia = new Uint8Array(n)
  while (n--) {
    ia[n] = bytes.charCodeAt(n)
  }
  return new File([ia], filename, { type: mime })
}

/**
 * base64 转 blob
 * @param code - base64转blob  code为base64编码字符
 * @returns { Blob } blob - 文件
 */
export function base64ToBlob(code: string) {
  const arr = code.split(';base64,')
  const contentType = arr[0].split(':')[1]
  const bytes = window.atob(arr[1])
  const bytesLength = bytes.length

  const blobParts = new Uint8Array(bytesLength)

  for (let i = 0; i < bytesLength; ++i) {
    blobParts[i] = bytes.charCodeAt(i)
  }
  return new Blob([blobParts], { type: contentType })
}

/**
 * blob 转 base64 字符串
 * @param file 文件
 * @returns { string } base64 字符串
 */
export async function blobToDataURL(file: File) {
  const reader = new FileReader()
  reader.readAsDataURL(file)

  return new Promise((resolve, reject) => {
    reader.onload = function () {
      resolve(reader.result) //获取到base64格式图片
    }
    reader.onerror = function (err) {
      reject(err)
    }
  })
}

/**
 * kb -> mb
 * @param mb 文件大小
 */
export function fileKbTransformMb(mb: number) {
  return 1024 * 1024 * mb
}
