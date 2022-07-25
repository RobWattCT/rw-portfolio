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
              <a className="text-white hover:text-sky-700" target="_blank">Get Quote</a>
            </Link>
            <Link href="https://github.com/RobWattCT">
              <a className="text-white hover:text-sky-700" target="_blank">My GitHub</a>
            </Link>
            <Link href="https://www.linkedin.com/in/robwattct/">
              <a className="text-white hover:text-sky-700" target="_blank">My LinkedIn</a>
            </Link>
          </div>
        </div>
        <Link href="/admin" prefetch={false}>
          <a className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200">
            Edit content
          </a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
