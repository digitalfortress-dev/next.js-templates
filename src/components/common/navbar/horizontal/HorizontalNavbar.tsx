'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavbarList } from './NavbarList';

export const menuIcon = [
  {
    name: 'Menu1',
    icon: '/Item.svg'
  },
  {
    name: 'Menu2',
    icon: '/Item-1.svg'
  },
  {
    name: 'Menu3',
    icon: '/Item-2.svg'
  },
  {
    name: 'Menu4',
    icon: '/Item-3.svg'
  },
  {
    name: 'Menu5',
    icon: '/Item-4.svg'
  },
  {
    name: 'Menu6',
    icon: '/Item-5.svg'
  },
  {
    name: 'Menu7',
    icon: '/Item-6.svg'
  },
  {
    name: 'Menu8',
    icon: '/Item-7.svg'
  },
  {
    name: 'Menu9',
    icon: '/Item-8.svg'
  }
]

export function HorizontalNavbar() {
  return (
    <aside className='fixed w-full mx-auto top-0 mt-2 '>
      <nav className='flex mx-auto max-w-90'>
        <div className='flex w-full justify-between items-center pl-2 py-1'>
          <Link href='/'>
            <Image
              src='/Home.svg'
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </Link>
          <NavbarList />
          <User />
        </div>
      </nav>
    </aside>
  )
}

const User = () => {
  return (
    <div className='flex items-center'>
      <Image
        className='mx-4'
        src="/Hansel.svg" width={24}
        height={24}
        alt="Picture of the author" />
      <span className='text-xs'>Johnny</span>
      <Image
        className='mx-4'
        src="/Arrow-down.svg" width={24}
        height={24}
        alt="Picture of the author" />
    </div>
  )
}