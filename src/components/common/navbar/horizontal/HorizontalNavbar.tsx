'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavbarList } from './NavbarList';
import { action, useStore } from '@/app/[lang]/context';

export const menuIconHorizontal = [
  {
    name: 'Booking',
    icon: '/Item-1.svg',
    path: '/horizontal-dashboard/booking',
    slug: 'booking'
  },
  {
    name: 'Menu3',
    icon: '/Item-2.svg',
    path: '',
    slug: ''
  },
  {
    name: 'Menu4',
    icon: '/Item-3.svg',
    path: '',
    slug: ''
  },
  {
    name: 'Menu5',
    icon: '/Item-4.svg',
    path: '',
    slug: ''
  },
  {
    name: 'Menu6',
    icon: '/Item-5.svg',
    path: '',
    slug: ''
  },
  {
    name: 'Menu7',
    icon: '/Item-6.svg',
    path: '',
    slug: ''
  },
  {
    name: 'Menu8',
    icon: '/Item-7.svg',
    path: '',
    slug: ''
  },
  {
    name: 'Menu9',
    icon: '/Item-8.svg',
    path: '',
    slug: ''
  }
]

export function HorizontalNavbar() {



  return (
    <aside className='fixed w-full mx-auto top-0 mt-2 '>
      <nav className='flex mx-10'>
        <div className='mr-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
          <div className='flex items-center rounded-lg bg-primary pl-2 py-1'>
            <Logo />
            <NavbarList />
          </div>
        </div>
        <Search />
        <User />
      </nav>
    </aside>
  )
}

export const Logo = () => {
  return (
    <div className='flex items-center mr-10'>
      <Image
        src='/Home.svg'
        width={32}
        height={32}
        alt="Picture of the author"
      />
      <Link href={"/horizontal-dashboard"} className='ml-2 text-primary'>
        App  /  Dashboard
      </Link>
    </div>
  )
}

export const Search = () => {

  const { state: { textInput }, dispatch } = useStore()

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(action.setTextInput(e.target.value))
  }

  return (
    <div className='relative rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
      <input
        value={textInput}
        onChange={handleChangeText}
        placeholder="Search in all system" className='rounded-lg bg-primary text-primary border-none border-opacity-0 pl-8 h-full' type="text" />
      <Image className='absolute top-1/4 left-2' src='/search.svg'
        width={20}
        height={20}
        alt="Picture of the author" />
    </div>
  )
}

const User = () => {
  return (
    <Image className='ml-auto'
      src="/Hansel.svg" width={24}
      height={24}
      alt="Picture of the author" />
  )
}