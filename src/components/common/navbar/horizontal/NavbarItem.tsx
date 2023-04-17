import Image from 'next/image';
import Link from "next/link";

type INavbarItem = {
  name: string,
  icon: string
}

export function NavbarItem({ name, icon }: INavbarItem) {
  return (
    <Link className='mr-4 flex items-center' href='#'>
      <Image
        src={icon}
        width={20}
        height={20}
        alt="Picture of the author"
      />
      <span className='text-xs'>{name}</span>
    </Link>
  )
}