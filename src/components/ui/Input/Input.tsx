interface IProp {
  className?: string;
  classInput?: string;
  classLabel?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value: string | number;
  label?: string;
  disabled?: boolean;
  error?: string;
  iconBefore?: any;
  iconAfter?: any;
  autoFocus?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
export default function Button({
  className,
  classInput,
  classLabel,
  iconBefore,
  iconAfter,
  type,
  placeholder,
  name,
  label,
  disabled,
  autoFocus,
  value,
  error,
  onFocus,
  onChange,
  onBlur,
}: IProp) {
  return (
    <div className="mb-6">
      {label && (
        <label
          className={`${classLabel} mb-2 block text-sm font-medium text-gray-900 dark:text-white`}
        >
          {label}
        </label>
      )}
      <div className={`${className} relative w-full`}>
        {iconBefore && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {iconBefore}
          </div>
        )}
        <input
          type={type || 'text'}
          name={name}
          disabled={disabled}
          className={`${classInput}block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
          placeholder={placeholder || ''}
          value={value}
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          autoFocus={autoFocus}
        />
        {iconAfter && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {iconAfter}
          </div>
        )}
      </div>
      {error && (
        <p className="mb-2 block text-sm font-medium text-red-800">{error}</p>
      )}
    </div>
  );
}
