export function RocketInfoItem({
  icon: Icon,
  value,
  label,
}: {
  icon?: React.ElementType;
  value: string | number;
  label: string;
}) {
  return (
    <div className="justify-self-center text-center space-y-2 md:space-y-4 flex flex-col justify-between">
      {Icon && <Icon className="stroke-1 h-6 w-6 md:h-12 md:w-12 mx-auto" />}
      <p className="text-2xl md:text-4xl lg:text-5xl font-normal">{value}</p>
      <p className="text-xl md:text-2xl">{label}</p>
    </div>
  );
}
