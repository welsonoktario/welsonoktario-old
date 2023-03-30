'use client'

import {
  SectionAbout,
  SectionContact,
  SectionWork,
} from '@/components/sections'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Page() {
  const ctxRoot = useRef<HTMLDivElement>(null)
  const helloRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(helloRef.current, {
        x: 100,
        autoAlpha: 1,
        duration: 1,
      })
    }, ctxRoot)

    return ctx.revert()
  }, [])

  return (
    <div className="tracking-tight text-stone-700" ref={ctxRoot}>
      <SectionAbout ref={helloRef} />
      <SectionWork ref={workRef} />
      <SectionContact ref={workRef} />
    </div>
  )
}
