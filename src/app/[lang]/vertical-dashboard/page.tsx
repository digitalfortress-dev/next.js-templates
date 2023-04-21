import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-xl font-medium text-gray-300">Examples</div>
    </div >
  )
}
