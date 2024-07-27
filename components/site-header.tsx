import type { Rocket } from "@/app/type";
import spaceXLogo from "../public/spacex-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { StyledLink } from "./styled-link";

export default async function SiteHeader() {
  const URL = "https://api.spacexdata.com/v4/rockets";

  const res = await fetch(URL);

  const rockets: Rocket[] = await res.json();

  return (
    <header className="flex w-full justify-between items-center mb-12">
      <Link href="/">
        <Image
          priority
          src={spaceXLogo}
          height={25}
          width={200}
          alt="Space X Logo"
          className="invert mb-4"
        />
        <span className="sr-only">Home Page Link</span>
      </Link>

      <div className="hidden md:inline-flex space-x-6">
        {rockets.map((rocket) => (
          <StyledLink href={`/rocket/${rocket.id}`} key={rocket.id}>
            {rocket.name}
          </StyledLink>
        ))}
      </div>
    </header>
  );
}
