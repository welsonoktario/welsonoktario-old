import { useStore } from '@/lib/store'
import { useEffect } from 'react'

export function useScroll(callback: any, deps = []) {
  const lenis = useStore<any>(({ lenis }: any) => lenis)

  useEffect(() => {
    if (!lenis) return
    lenis.on('scroll', callback)
    lenis.emit()

    return () => {
      lenis.off('scroll', callback)
    }
  }, [lenis, callback, [...deps]])
}
