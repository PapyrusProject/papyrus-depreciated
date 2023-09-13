import { InputHTMLAttributes, forwardRef, useId } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  (
    { name = "", label = "", type = "text", ...props },
    ref
  ) => {
    const inputId = useId();

    return (
      <>
        <label htmlFor={inputId}>{label}</label>
        <input
          className="bg-grey p-2 rounded-lg focus:shadow-sm focus:shadow-primary focus:border focus:border-primary/50 outline-none"
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
