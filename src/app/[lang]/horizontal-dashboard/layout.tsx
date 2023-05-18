import { HorizontalNavbar } from '@/components/common/navbar/horizontal'
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
      <HorizontalNavbar />
      <div className='pt-20 max-w-90 mx-auto'>{children}</div>
    </>
  )
}
