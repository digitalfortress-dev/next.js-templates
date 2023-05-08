import Image from 'next/image';
interface IProp {
  className?: string;
  disabled?: boolean;
  isDropDown?: boolean;
  icon?: any;
  id?: string;
  dropdown?: string;
  onClick?: () => void;
}
export default function Button({
  className,
  disabled,
  isDropDown,
  dropdown,
  icon,
  id,
  onClick,
}: IProp) {
  return (
    <button
      id={id}
      className={`${className} flex inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      type="button"
      disabled={disabled}
      data-dropdown-toggle={dropdown}
      onClick={onClick}
    >
      {icon}
      Button
      {isDropDown && (
        <Image
          src="/drop-down.svg"
          width={15}
          height={15}
          alt="Picture of the author"
        />
      )}
    </button>
  );
}
