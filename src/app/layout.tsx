import { Metadata } from 'next'
import './globals.css'
import { AddressBar } from '@/components/common/AddressBar'
import { Byline } from '@/components/common/Byline'
import { VerticalNavbar } from '@/components/common/navbar/vertical'

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
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <main>{children}</main>

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            {/* <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Byline className="fixed sm:hidden" /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
