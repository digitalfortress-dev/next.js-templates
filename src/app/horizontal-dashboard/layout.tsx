import { HorizontalNavbar } from '@/components/common/navbar/horizontal'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'DF - Next.js Boilerplate',
    template: '% | Next.js Boilerplate',
  },
  description: 'A boilerplate template to explore new Next.js features'
}

const menuIcon = [
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
  },
  {
    name: 'Menu10',
    icon: '/Item-9.svg'
  },
  {
    name: 'Menu11',
    icon: '/Item-10.svg'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HorizontalNavbar />
      <div className='pt-20 max-w-90 mx-auto'>{children}</div>
    </>
  )
}
