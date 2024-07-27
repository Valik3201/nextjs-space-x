import { Badge } from "@/components/ui/badge";

export function RocketBadge({ active }: { active: boolean }) {
  return (
    <span className="pt-1.5">
      {active ? (
        <Badge variant="active" className="tracking-wide font-light">
          Active
        </Badge>
      ) : (
        <Badge variant="destructive" className="tracking-wide font-light">
          Inactive
        </Badge>
      )}
    </span>
  );
}
