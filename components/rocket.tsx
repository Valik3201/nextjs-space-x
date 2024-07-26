import type { Rocket } from "@/app/type";
import Image from "next/image";

export default function RocketPage({ rocket }: { rocket: Rocket }) {
  return (
    <section>
      <div>
        <p>{rocket.description}</p>
      </div>

      <ul>
        {rocket.flickr_images.map((img, i) => (
          <li key={i}>
            <Image src={img} alt={rocket.name} height={200} width={300} />
          </li>
        ))}
      </ul>
    </section>
  );
}
