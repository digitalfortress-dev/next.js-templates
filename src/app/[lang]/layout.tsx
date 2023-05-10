import { Metadata } from 'next';
import { cookies } from 'next/headers';

import PresetColor from '@/components/common/PresetColor';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: 'DF - Next.js Boilerplate',
    template: '% | Next.js Boilerplate',
  },
  description: 'A boilerplate template to explore new Next.js features'
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <html lang={params.lang}>
      <body className={`theme-${theme?.value} text-skin-base bg-skin-base overflow-y-scroll bg-[url('/grid.svg')]`}>
        <main>{children}</main>
        <PresetColor />
        {/* <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Byline className="fixed sm:hidden" />
          </div>
        </div> */}
      </body>
    </html>
  )
}
