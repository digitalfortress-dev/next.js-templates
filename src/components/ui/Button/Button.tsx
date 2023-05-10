'use client';
interface IProp extends React.ButtonHTMLAttributes<{}> {
  children: React.ReactNode;
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
  className: string;
}
export default function Button({
  className,
  children,
  startIcon,
  endIcon,
  ...rest
}: IProp) {
  return (
    <button
      {...rest}
      className={`${className} flex inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
