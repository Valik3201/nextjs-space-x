import type { Rocket } from "@/app/type";
import RocketPage from "@/components/rocket";
import { StyledLink } from "@/components/styled-link";

export default async function Page({ params }: { params: { id: string } }) {
  const URL = "https://api.spacexdata.com/v4/rockets";

  const res = await fetch(`${URL}/${params.id}`);

  const rocket: Rocket = await res.json();

  return (
    <main className="space-y-8">
      <RocketPage rocket={rocket} />

      <StyledLink href="/" className="text-accent after:bg-accent">
        Home Page
      </StyledLink>
    </main>
  );
}
