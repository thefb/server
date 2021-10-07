import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'

function routerBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, method, target, key)
    }
  }
}

export const get = routerBinder('get')
export const put = routerBinder('put')
export const post = routerBinder('post')
export const del = routerBinder('delete')
export const patch = routerBinder('patch')