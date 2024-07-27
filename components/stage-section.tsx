interface StageSectionProps {
  data: {
    label: string;
    value?: string | number | undefined;
    unit?: string | undefined;
  }[];
}

export function StageSection({ data }: StageSectionProps) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b border-accent-foreground pb-4"
        >
          <p>{item.label}</p>
          <div>
            <span className="font-normal">{item.value}</span>
            {item.unit && <span> / {item.unit}</span>}
          </div>
        </div>
      ))}
    </>
  );
}
