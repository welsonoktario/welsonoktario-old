'use client'

import { LayoutFooter, LayoutHeader } from '@/components/layout'
import { useStore } from '@/lib/store'
import '@/styles/globals.css'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import localFont from 'next/font/local'

/* export const metadata = {
  title: 'Welson Oktario',
  description:
    'Welson Oktario personal website, a web developer focusing on frontend web technologies',
} */

const plusJakarta = localFont({
  src: [
    {
      path: '../assets/fonts/PlusJakartaSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PlusJakartaSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta',
  display: 'swap',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})
const sentient = localFont({
  src: [
    {
      path: '../assets/fonts/Sentient-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Sentient-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-sentient',
  display: 'swap',
  fallback: [
    'ui-serif',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
})
const fraktionMono = localFont({
  src: '../assets/fonts/PPFraktionMono-Regular.otf',
  variable: '--font-fraktion',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [navIsOpen, setNavIsOpen, lenis, setLenis] = useStore((state) => [
    state.navIsOpen,
    state.setNavIsOpen,
    state.lenis,
    state.setLenis,
  ])

  useLenis((scroll: any) => {
    if (!lenis) {
      setLenis(scroll)
      window.scrollTo(0, 0)
    }

    if (scroll.direction == 1) {
      if (navIsOpen) {
        setNavIsOpen(false)
      }
    } else {
      if (!navIsOpen) {
        setNavIsOpen(true)
      }
    }
  }, [])

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sentient.variable} ${fraktionMono.variable}`}
    >
      <body className="bg-stone-200">
        <ReactLenis root>
          <LayoutHeader />
          <main className="container mx-auto px-8">{children}</main>
          <LayoutFooter />
        </ReactLenis>
      </body>
    </html>
  )
}
