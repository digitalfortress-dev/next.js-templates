import Image from 'next/image';
import Link from "next/link";

type INavbarItem = {
  name: string,
  icon: string
}

export function NavbarItem({ name, icon }: INavbarItem) {
  return (
    <Link className='mr-3' href='#'><Image
      src={icon}
      width={32}
      height={32}
      alt="Picture of the author"
    /></Link>
  )
}