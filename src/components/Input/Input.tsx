import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  (
    { name = "", label = "", type = "text", icon="", ...props },
    ref
  ) => {
    const inputId = useId();

    return (
      <>
        <label htmlFor={inputId}>{label}</label>
        <div className="flex items-center justify-start text-primary">
        {icon}
        <input
          className="p-2 ml-1 bg-gray rounded-lg focus:shadow-sm focus:shadow-primary focus:border focus:border-primary/50 outline-none"
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          {...props}
        />
        </div>
      </>
    );
  }
);
