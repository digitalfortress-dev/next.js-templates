import { VerticalNavbar } from '@/components/common/navbar/vertical'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'DF - Next.js Boilerplate',
    template: '% | Next.js Boilerplate',
  },
  description: 'A boilerplate template to explore new Next.js features'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <VerticalNavbar />
      <main className='p-4'>{children}</main>
    </>
  )
}
