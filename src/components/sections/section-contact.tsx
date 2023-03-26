import { Ref, forwardRef } from 'react'

export const SectionContact = forwardRef(function SectionContact(
  _props: any,
  ref: Ref<HTMLDivElement>
) {
  return (
    <section className="section-contact min-h-screen pt-32">
      <div ref={ref} className="text-xl font-medium md:text-2xl lg:text-3xl">
        <p className="text-center font-serif text-6xl font-black text-primary">
          Contact
        </p>
      </div>
    </section>
  )
})
