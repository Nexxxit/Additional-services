type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button className={`cursor-pointer ${className}`} type={type} {...rest}>
      {children}
    </button>
  );
}
