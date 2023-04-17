'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { Byline } from '@/components/common/Byline';

export function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            Logo
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            App Router <span className="Work in progress">(Beta)</span>
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          "Opened"
        ) : (
          "Closed"
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          <div key="section-name">
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
              <div>section-name</div>
            </div>

            <div className="space-y-1">
              section-item
            </div>
          </div>
        </nav>
        <Byline className="absolute hidden sm:block" />
      </div>
    </div>
  )
}