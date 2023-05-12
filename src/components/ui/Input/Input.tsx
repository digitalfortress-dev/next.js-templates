'use client';

import clsx from 'clsx';

interface IProp extends React.InputHTMLAttributes<{}> {
  className?: string;
  label?: string;
  error?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}
export default function Input({
  className,
  startIcon,
  endIcon,
  error,
  label,
  ...rest
}: IProp) {
  return (
    <>
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}
      <div className="relative block">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            {startIcon}
          </div>
        )}
        <input
          {...rest}
          className={clsx(className, 'w-full rounded-md border py-2 text-sm')}
        />
        {endIcon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {endIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mb-2 block text-sm font-medium text-red-800">{error}</p>
      )}
    </>
  );
}
