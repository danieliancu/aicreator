import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between m-auto max-w-screen-lg p-10">
        <div>
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Flatplan">Flatplan</Link>
        </div>
    </div>
  )
}

export default Navbar