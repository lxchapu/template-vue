import type { GlobalThemeOverrides } from 'naive-ui'
import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'

extend([mixPlugin])
/**
 * 获取按钮不同状态对应的颜色
 * @param {string} name 按钮类型
 * @param {string} color 主色
 */
function getButtonColor(name: string, color: string) {
  const baseColor = colord(color)
  const hoverColor = baseColor.alpha(0.8).toHex()
  const pressdColor = baseColor.mix('#000', 0.1).toHex()
  return {
    [`${name}Color`]: color,
    [`${name}ColorHover`]: hoverColor,
    [`${name}ColorPressed`]: pressdColor,
    [`${name}ColorSuppl`]: hoverColor,
  }
}

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    ...getButtonColor('primary', '#277aa0'),
    ...getButtonColor('success', '#51b76d'),
    ...getButtonColor('warning', '#fecb24'),
    ...getButtonColor('error', '#db1818'),
    ...getButtonColor('info', '#686868'),

    fontWeightStrong: 'bold',
  },
}
