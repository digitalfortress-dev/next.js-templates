'use client';

interface IProp extends React.InputHTMLAttributes<{}> {
  className?: string;
  classInput?: string;
  label?: string;
  error?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}
export default function Button({
  className,
  classInput,
  startIcon,
  endIcon,
  error,
  label,
  ...rest
}: IProp) {
  return (
    <div className="mb-6">
      {label && (
        <label className={`mb-2 block text-sm font-medium `}>{label}</label>
      )}
      <div className={`${className} relative w-full`}>
        {startIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {startIcon}
          </div>
        )}
        <input
          {...rest}
          className={`${classInput} block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm`}
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
    </div>
  );
}
