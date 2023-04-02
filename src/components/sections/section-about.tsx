import { Ref, forwardRef } from 'react'

export const SectionAbout = forwardRef(function SectionHello(
  _props: any,
  ref: Ref<HTMLDivElement>
) {
  return (
    <section className="section-about flex min-h-screen flex-col items-center justify-center text-center">
      <div ref={ref} className="text-xl font-medium md:text-2xl lg:text-3xl">
        <p className="font-semibold text-black">Hi, I&apos;m</p>
        <p className="font-serif text-7xl font-black italic text-primary md:text-9xl">
          Welson
          <br />
          Oktario
        </p>
        <p className="mt-4 max-w-lg px-4 text-center font-sans text-xl tracking-normal text-black md:mt-4 md:px-0 md:text-2xl lg:mt-6">
          a web developer focusing on building web apps using modern
          technologies
        </p>
      </div>
    </section>
  )
})
