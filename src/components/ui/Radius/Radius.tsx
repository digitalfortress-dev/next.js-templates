'use client';

import clsx from 'clsx';

interface IProp extends React.InputHTMLAttributes<{}> {
  className?: string;
  label?: string;
  error?: string;
}
export default function Radius({ className, error, label, ...rest }: IProp) {
  return (
    <>
      <div className="flex items-center">
        <input
          {...rest}
          type="checkbox"
          className={clsx(className, 'h-4 w-4 rounded-full border-none')}
        />
        {label && <label className="ml-2 text-sm font-medium">{label}</label>}
      </div>
      {error && (
        <p className="mb-2 block text-sm font-medium text-red-800">{error}</p>
      )}
    </>
  );
}
