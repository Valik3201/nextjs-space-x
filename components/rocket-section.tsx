interface RocketSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function RocketSection({
  title,
  subtitle,
  children,
}: RocketSectionProps) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extralight tracking-tight leading-none pb-2 md:pb-0">
        {subtitle}
      </h3>
      <h2 className="text-4xl font-normal tracking-tight leading-none md:text-5xl lg:text-7xl">
        {title}
      </h2>

      <div className="max-w-3xl flex flex-col gap-4 pt-8">{children}</div>
    </div>
  );
}
