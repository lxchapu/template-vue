import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'

import { lightTheme, darkTheme } from 'naive-ui'
import { themeOverrides } from '@/settings'
type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      userTheme: 'light' as Theme,
    }
  },
  persist: {
    enabled: true,
    strategies: [{ key: '__APP_THEME__', path: 'userTheme', type: 'string' }],
  },
  getters: {
    theme(): GlobalTheme {
      return this.userTheme === 'light' ? lightTheme : darkTheme
    },
    themeOverrides(): GlobalThemeOverrides {
      return themeOverrides
    },
    isDark(): boolean {
      return this.userTheme === 'dark'
    },
  },
})
