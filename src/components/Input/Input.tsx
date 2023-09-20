import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ name = "", label = "", type = "text", icon = "", ...props }, ref) => {
    const inputId = useId();

    return (
      <>
        <label htmlFor={inputId}>{label}</label>
        <div className="pl-1 flex items-center justify-start text-primary bg-gray rounded focus-within:shadow-sm focus-within:shadow-primary focus-within:border focus-within:border-primary/50 ">
          {icon}
          <input
            className="p-2 bg-gray rounded-lg outline-none"
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
