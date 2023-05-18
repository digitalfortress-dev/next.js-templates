'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const menuIconVertical = [
  {
    name: 'Menu1',
    icon: '/Item.svg',
    path: '/vertical-dashboard'
  },
  {
    name: 'Menu2',
    icon: '/Item-1.svg',
    path: '/vertical-dashboard/booking'
  },
  {
    name: 'Menu3',
    icon: '/Item-2.svg',
    path: ''
  },
  {
    name: 'Menu4',
    icon: '/Item-3.svg',
    path: ''
  },
  {
    name: 'Menu5',
    icon: '/Item-4.svg',
    path: ''
  },
  {
    name: 'Menu6',
    icon: '/Item-5.svg',
    path: ''
  },
  {
    name: 'Menu7',
    icon: '/Item-6.svg',
    path: ''
  },
  {
    name: 'Menu8',
    icon: '/Item-7.svg',
    path: ''
  },
  {
    name: 'Menu9',
    icon: '/Item-8.svg',
    path: ''
  },
  {
    name: 'Menu10',
    icon: '/Item-9.svg',
    path: ''
  },
  {
    name: 'Menu11',
    icon: '/Item-10.svg',
    path: ''
  }
]

export function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="border-r min-h-screen border-b border-gray-800 bg-primary lg:bottom-0 lg:z-auto lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className='pt-16 bg-primary px-2'>
        {
          menuIconVertical.map((item, index) => {
            return (
              <div key={index} className="">
                <Link className='mr-3 ' href={item.path}><Image
                  src={item.icon}
                  width={32}
                  height={32}
                  alt="Picture of the author"
                /></Link>
              </div>
            )
          })
        }
        <Image
          className='ml-auto'
          src="/Hansel.svg"
          width={24}
          height={24}
          alt="Picture of the author" />
      </div>

      {/* <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="text-primary h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            Logo
          </div>

          <h3 className="font-semibold tracking-wide text-primary group-hover:text-gray-50">
            App Router <span className="Work in progress">(Beta)</span>
          </h3>
        </Link>
      </div> */}
      {/* <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-primary">
          Menu
        </div>
        {isOpen ? (
          "Opened"
        ) : (
          "Closed"
        )}
      </button> */}

      {/* <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          <div key="section-name">
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-primary">
              <div>section-name</div>
            </div>

            <div className="space-y-1 text-primary">
              section-item
            </div>
          </div>
        </nav>
        <Byline className="absolute hidden sm:block" />
      </div> */}
    </div>
  )
}