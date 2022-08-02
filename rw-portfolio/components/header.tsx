import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-slate-800 sm:h-20 py-5 sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <img src="/robwatt-logo-white.png" className="w-14" alt="Rob Watt" />
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/">
              <a className="text-white hover:text-sky-700">Home</a>
            </Link>
            <Link href="https://forms.reform.app/PxGYph/work-with-us/vyZ90c">
              <a className="text-white hover:text-sky-700" target="_blank">Quote</a>
            </Link>
            <Link href="#about">
              <a className="text-white hover:text-sky-700" target="_blank">About</a>
            </Link>
            <Link href="#portfolio">
              <a className="text-white hover:text-sky-700" target="_blank">Portfolio</a>
            </Link>
            <Link href="#faq">
              <a className="text-white hover:text-sky-700" target="_blank">FAQ</a>
            </Link>
            <Link href="#contact">
              <a className="text-white hover:text-sky-700" target="_blank">Contact</a>
            </Link>
          </div>
        </div>
        <Link href="https://github.com/RobWattCT">
          <a className="transition duration-500 hover:scale-110"><img src="https://www.shareicon.net/download/2015/09/15/101512_logo_512x512.png" width="25"/></a>
        </Link>
        <Link href="https://www.twitter.com/robwattct/">
          <a className="transition duration-500 hover:scale-110"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111688.png" width="25"/></a>
        </Link>
        <Link href="https://www.linkedin.com/in/robwattct/">
          <a className="transition duration-500 hover:scale-110"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="25"/></a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
