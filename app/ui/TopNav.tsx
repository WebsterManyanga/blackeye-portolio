import Image from 'next/image'
import React from 'react'

export default function TopNav() {
  return (
    <section className=' hidden md:block absolute w-full  top-0 z-10' >
        <nav className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
              <div>
                <Image src="/logo.jpg" alt="logo" width={50} height={50} />
              </div>            </div>
            <div className="flex items-center space-x-10">
            <a href="#portfolio" className="text-lg text-primary">Portfolio</a>
            <a href="#price" className="text-lg text-primary">Service & Price</a>
            <a href="#contact" className="text-lg text-primary">Contact</a>
            </div>
        </nav>
    </section>
  )
}
