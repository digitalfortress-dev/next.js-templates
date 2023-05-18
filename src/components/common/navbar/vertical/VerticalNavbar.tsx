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
    </div>
  )
}