import { Ref, forwardRef } from 'react'

export const SectionAbout = forwardRef(function SectionHello(
  _props: any,
  ref: Ref<HTMLDivElement>
) {
  return (
    <section className="section-about flex min-h-screen flex-col items-center justify-center text-center">
      <div ref={ref} className="text-xl font-medium md:text-2xl lg:text-3xl">
        <p className="font-semibold">Hi, I&apos;m</p>
        <p className="font-serif text-9xl font-black italic text-primary">
          Welson
          <br />
          Oktario
        </p>
        <p className="lg-mt-6 text-zinc-6 mt-2 max-w-lg text-left font-sans text-base tracking-normal text-zinc-800 md:mt-4">
          a web developer focusing on building web apps using modern
          technologies
        </p>
      </div>
    </section>
  )
})
