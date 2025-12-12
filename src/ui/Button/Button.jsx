function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  const base = `
    inline-flex items-center justify-center rounded-full font-medium transition
    cursor-pointer select-none
    disabled:cursor-not-allowed disabled:opacity-70
  `;

  const sizes = {
    md: "h-[60px] px-[48px] text-[18px] leading-[1.56]",
    sm: "h-[41px] px-[18px] text-[14px] leading-[14px]",
  };

  const variants = {
    primary: `
      bg-[var(--primary-200main)]
      text-[var(--white-1000)]
      hover:bg-[var(--primery-300)]

      active:bg-[var(--primery-400)]
      active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)]

      disabled:bg-[var(--grey-400)]
      disabled:text-[var(--grey-200)]
      disabled:border-none
    `,

    outline: `
      border-2 border-[var(--primary-200main)]
      text-[var(--primary-200main)]
      hover:border-[var(--primery-300)]
      hover:text-[var(--primery-300)]

      active:border-[var(--primery-400)]
      active:text-[var(--grey-200)]
      active:bg-[var(--secondary-1000)]
      active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)]

      disabled:border-[var(--grey-400)]
      disabled:text-[var(--grey-400)]
      disabled:bg-transparent
    `,
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
