import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <button className='text-primary'>{dictionary['dashboard']['home']}</button>
      <div>
        <Link className='text-primary' href={'/vertical-dashboard'}>Vertical</Link>/
        <Link className='text-primary' href={'/horizontal-dashboard'}>Horizontal</Link>
      </div>
      <div className="space-y-10 text-white"></div>
      <div key="section-name" className="space-y-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Section Name
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="font-medium text-primary group-hover:text-gray-50">
            Test
          </div>

          <div className="text-sm text-primary line-clamp-3 group-hover:text-gray-300">
            Test Description
          </div>
        </div>
      </div>
    </div>
  )
}
