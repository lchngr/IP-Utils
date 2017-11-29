import { toString } from './ToString'

export function mask (subnet: string): string {
  let split = subnet.split('/')
  let longMask = Math.pow(2, 32) - Math.pow(2, 32 - parseInt(split[1], 10))
  return toString(longMask)
}