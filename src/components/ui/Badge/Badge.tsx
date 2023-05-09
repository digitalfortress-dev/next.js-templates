'use client';

import Image from 'next/image';

interface IProp {
  className: string;
  label: string;
  remove?: boolean;
  classButton?: string;
  icon?: any;
}
export default function Badge({
  className,
  classButton,
  label,
  remove,
  icon,
}: IProp) {
  return (
    <span
      id="badge-dismiss-default"
      className={`${className} mr-2 inline-flex items-center rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300`}
    >
      {icon}
      {label}
      {remove && (
        <button
          type="button"
          className={`${classButton} ml-2 inline-flex items-center rounded-sm bg-transparent p-0.5 text-sm text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300`}
          data-dismiss-target="#badge-dismiss-default"
          aria-label="Remove"
        >
          <Image
            className="absolute left-2 top-1/4"
            src="/remove.svg"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </button>
      )}
    </span>
  );
}
