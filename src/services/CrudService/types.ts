import type { AxiosRequestConfig } from 'axios'

export interface CrudService<T, TCreate = Partial<T>, TUpdate = Partial<T>> {
  getAll: (config?: AxiosRequestConfig) => Promise<T[]>
  getById: (id: string | number, config?: AxiosRequestConfig) => Promise<T>
  create: (payload: TCreate, config?: AxiosRequestConfig) => Promise<T>
  update: (id: string | number, payload: TUpdate, config?: AxiosRequestConfig) => Promise<T>
  remove: (id: string | number, config?: AxiosRequestConfig) => Promise<void>
}
