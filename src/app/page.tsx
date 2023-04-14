import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <div className="space-y-10 text-white"></div>
      <div key="section-name" className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Section Name
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                  <div className="font-medium text-gray-200 group-hover:text-gray-50">
                    Test
                  </div>

                  <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                    Test Description
                  </div>
              </div>
      </div>
    </div>
)
}
