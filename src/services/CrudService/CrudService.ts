import { api } from '../api'
import type { CrudService as CrudServiceContract } from './types'

export function CrudService<T, TCreate = Partial<T>, TUpdate = Partial<T>>(
  resource: string
): CrudServiceContract<T, TCreate, TUpdate> {
  return {
    getAll: async config => {
      const { data } = await api.get<T[]>(`/${resource}`, config)
      return data
    },

    getById: async (id, config) => {
      const { data } = await api.get<T>(`/${resource}/${id}`, config)
      return data
    },

    create: async (payload, config) => {
      const { data } = await api.post<T>(`/${resource}`, payload, config)
      return data
    },

    update: async (id, payload, config) => {
      const { data } = await api.put<T>(`/${resource}/${id}`, payload, config)
      return data
    },

    remove: async (id, config) => {
      await api.delete(`/${resource}/${id}`, config)
    },
  }
}
