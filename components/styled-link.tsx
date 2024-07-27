import Link from "next/link";
import { cn } from "@/lib/utils";

interface StyledLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}

export function StyledLink({ href, className, ...props }: StyledLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block w-fit font-extralight text-md md:text-xl lg:text-2xl relative after:bg-foreground after:absolute after:h-px after:w-0 after:-bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300",
        className
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
}
