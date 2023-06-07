/**
 * 复制指定文本到剪切板上
 * @param {string} text 要复制的文本
 */
export function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text).catch(() => {
    const elInput = document.createElement('input')
    elInput.value = text
    document.body.appendChild(elInput)

    elInput.select()
    const isCopySccess = document.execCommand('copy')
    elInput.parentElement!.removeChild(elInput)

    if (!isCopySccess) throw Error('暂不支持复制剪切板功能!')
  })
}
