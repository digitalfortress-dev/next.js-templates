import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="space-y-8">

      <div className="space-y-10 text-white"></div>
      <div key="section-name" className="space-y-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Section Name
        </div>


      </div>
    </div>
  )
}
