import Link from 'next/link'

export const LayoutFooter = () => {
  return (
    <footer className="w-full border-t-2 border-t-primary bg-white text-primary">
      <nav className="container mx-auto flex w-full flex-row items-center justify-between px-8 py-4 md:py-6">
        <Link href="/">
          <p className="font-serif text-4xl font-extrabold italic">W</p>
        </Link>
        <div className="inline-flex gap-6">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </footer>
  )
}
