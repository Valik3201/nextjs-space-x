import Link from "next/link";
import type { Rocket } from "@/app/type";

export default async function Home() {
  const URL = "https://api.spacexdata.com/v4/rockets";

  const res = await fetch(URL);

  const rockets: Rocket[] = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SpaceX Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h2 className="font-bold">{rocket.name}</h2>
            <p>{rocket.description}</p>
            <Link href={`/rocket/${rocket.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
