'use client';

import clsx from 'clsx';

interface IProp extends React.ButtonHTMLAttributes<{}> {
  children: React.ReactNode;
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
  className: string;
  color?: string;
}
export default function Button(props: IProp) {
  const { color, className, children, startIcon, endIcon, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        className,
        color,
        'flex items-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-medium opacity-90',
        { 'bg-[#F2F4F7] text-[#D0D5DD] hover:bg-[#F2F4F7]': props.disabled },
      )}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
