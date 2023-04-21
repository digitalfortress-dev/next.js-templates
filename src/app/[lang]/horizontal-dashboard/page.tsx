import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/4 text-primary">Section 1</div>
      <div className="basis-2/4 text-primary">Section 2</div>
    </div>
  )
}
