'use client'

import { useStore } from '@/lib/store'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './LayoutHeader.module.css'

export const LayoutHeader = () => {
  const [styles, setStyles] = useState('')
  const [navIsOpen, lenis] = useStore((state) => [state.navIsOpen, state.lenis])

  useEffect(() => {
    setStyles(
      clsx(
        s.nav,
        !navIsOpen && s['nav-hidden']
      )
    )
  }, [navIsOpen])

  const navigate = (selector: string) => lenis?.scrollTo(selector)

  return (
    <header className={styles}>
      <nav className="container mx-auto flex w-full flex-row items-center justify-between px-8 py-4 md:py-6">
        <Link href="/">
          <p className="font-serif text-4xl font-extrabold italic">W</p>
        </Link>
        <div className="inline-flex gap-6">
          <button onClick={() => navigate('.section-about')}>About</button>
          <button onClick={() => navigate('.section-work')}>Work</button>
          <button onClick={() => navigate('.section-contact')}>Contact</button>
        </div>
      </nav>
    </header>
  )
}
