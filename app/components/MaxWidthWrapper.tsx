export default function MaxWidthWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-full mx-auto w-full max-w-[900px] px-5 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
