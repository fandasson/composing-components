export const Input = (props) => {
    const { type = "text", required = false, name, placeholder, className, ...rest } = props;

    return (
        <input
            {...rest}
            id={name}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        />
    );
};
