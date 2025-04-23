import { useQuery } from '@tanstack/react-query'
import { fetcher } from './fetcher'

interface TanstackCustomOptions {
  key: string | string[]
  url: string
  enabled?: boolean
}

export const useTanstackCustom = <T = any>({
  key,
  url,
  enabled = true,
}: TanstackCustomOptions) => {
  return useQuery<T>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => fetcher<T>(url),
    enabled,
  })
}


  