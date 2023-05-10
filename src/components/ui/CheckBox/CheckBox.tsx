'use client';

interface IProp extends React.InputHTMLAttributes<{}> {
  className?: string;
  classInput?: string;
  classLabel?: string;
  label?: string;
  error?: string;
}
export default function CheckBox({
  className,
  classInput,
  classLabel,
  error,
  label,
  ...rest
}: IProp) {
  return (
    <div>
      <div className={`${className} flex items-center`}>
        <input
          {...rest}
          type="checkbox"
          className={`${classInput} h-4 w-4 rounded border-none bg-white text-[#0066FF] checked:bg-white dark:focus:ring-transparent`}
        />
        {label && (
          <label
            className={`${classLabel} ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="mb-2 block text-sm font-medium text-red-800">{error}</p>
      )}
    </div>
  );
}
