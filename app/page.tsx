import { RocketBadge } from "@/components/rocket-badge";
import { StyledLink } from "@/components/styled-link";
import { URL } from "@/lib/constants";
import type { Rocket } from "@/app/type";

export default async function Home() {
  const res = await fetch(URL);
  const rockets: Rocket[] = await res.json();

  return (
    <main>
      <ul className="space-y-6 md:space-y-12">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="space-y-4">
            <div className="flex gap-4 items-start">
              <h2 className="text-4xl tracking-tight leading-none md:text-5xl lg:text-7xl">
                {rocket.name}
              </h2>

              <RocketBadge active={rocket.active} />
            </div>

            <p className=" tracking-wide">{rocket.description}</p>

            <div>
              <StyledLink href={`/rocket/${rocket.id}`}>Read more</StyledLink>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
