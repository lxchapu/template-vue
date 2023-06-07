export type Serializer<T> = {
  read(raw: string): T
  write(value: T): string
}

export type PersistStrategy = {
  key?: string
  path: string
  type?: 'string' | 'number' | 'boolean' | 'object'
  storage?: Storage
}

export type PersistOptions = {
  enabled: true
  strategies: PersistStrategy[]
}

import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase {
    persist?: PersistOptions
  }
}
