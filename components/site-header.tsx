import Image from "next/image";
import Link from "next/link";
import spaceXLogo from "../public/spacex-logo.svg";
import { StyledLink } from "./styled-link";
import { URL } from "@/lib/constants";
import type { Rocket } from "@/app/type";

export default async function SiteHeader() {
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
