export const Label = (props) => {
    const { children, htmlFor, className } = props;
    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium leading-6 text-gray-900 ${className}`}>
            {children}
        </label>
    );
};
