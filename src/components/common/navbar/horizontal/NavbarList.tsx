'use client';

import { menuIcon } from './HorizontalNavbar';
import { NavbarItem } from './NavbarItem';

export function NavbarList() {

  return (
    <div className='max-w-full flex flex-wrap items-center justify-between'>
      {
        menuIcon.map((item, index) => <NavbarItem {...item} key={index} />)
      }
    </div>
  )
}