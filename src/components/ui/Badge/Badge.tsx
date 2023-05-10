'use client';
interface IProp {
  className: string;
  title: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}
export default function Badge({ className, title, startIcon, endIcon }: IProp) {
  return (
    <span
      id="badge-dismiss-default"
      className={`${className} mr-2 inline-flex items-center rounded bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300`}
    >
      {startIcon && startIcon}
      {title}
      {endIcon && endIcon}
    </span>
  );
}
