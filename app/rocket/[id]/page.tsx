import type { Rocket } from "@/app/type";
import RocketPage from "@/components/rocket";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const URL = "https://api.spacexdata.com/v4/rockets";

  const res = await fetch(`${URL}/${params.id}`);

  const rocket: Rocket = await res.json();

  return (
    <main>
      <h1 className="text-5xl font-extrabold">Rocket {rocket.name}</h1>

      <RocketPage rocket={rocket} />

      <Link href="/">Home Page</Link>
    </main>
  );
}
