import * as data from "@/lib/rocketDataPreparation";
import { Calendar, CircleDollarSign, ExternalLink, MapPin } from "lucide-react";
import { CarouselComponent } from "@/components/carousel-component";
import { OverviewSection } from "@/components/overview-section";
import { RocketBadge } from "@/components/rocket-badge";
import { RocketCarousel } from "@/components/rocket-carousel";
import { RocketInfoItem } from "@/components/rocket-info-item";
import { RocketSection } from "@/components/rocket-section";
import { StageSection } from "@/components/stage-section";
import { StyledLink } from "@/components/styled-link";
import type { Rocket } from "@/app/type";

export function RocketPage({ rocket }: { rocket: Rocket }) {
  const overviewData = data.prepareOverviewData(rocket);
  const firstStageData = data.prepareStageData(rocket.first_stage);
  const secondStageData = data.prepareStageData(rocket.second_stage);
  const payloadData = data.preparePayloadData(rocket.second_stage.payloads);
  const landingLegsData = data.prepareLandingLegsData(rocket.landing_legs);
  const engineGeneralData = data.prepareEngineGeneralData(rocket.engines);
  const engineSeaLevelData = data.prepareEngineSeaLevelData(rocket.engines);
  const engineVacuumData = data.prepareEngineVacuumData(rocket.engines);

  const carouselData1 = [
    { title: "Payloads", content: payloadData },
    { title: "Landing Legs", content: landingLegsData },
  ];

  const carouselData2 = [
    { title: "Sea Level", content: engineSeaLevelData },
    { title: "Vacuum", content: engineVacuumData },
  ];

  return (
    <section className="space-y-12">
      <div className="flex gap-4 items-start">
        <h2 className="text-4xl font-normal tracking-tight leading-none md:text-5xl lg:text-7xl">
          {rocket.name}
        </h2>

        <RocketBadge active={rocket.active} />
      </div>

      <p className="tracking-wide max-w-3xl">{rocket.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        <RocketInfoItem
          icon={Calendar}
          value={rocket.first_flight}
          label="First Flight"
        />
        <RocketInfoItem icon={MapPin} value={rocket.country} label="Country" />
        <RocketInfoItem
          icon={CircleDollarSign}
          value={`$${rocket.cost_per_launch.toLocaleString()}`}
          label="Cost per Launch"
        />
        <RocketInfoItem value={rocket.stages} label="Stages" />
        <RocketInfoItem value={rocket.boosters} label="Boosters" />
        <RocketInfoItem
          value={`${rocket.success_rate_pct}%`}
          label="Success Rate"
        />
      </div>

      <RocketSection title="Overview" subtitle={rocket.name}>
        <OverviewSection data={overviewData} />
      </RocketSection>

      <RocketSection title="First Stage">
        <StageSection data={firstStageData} />
      </RocketSection>

      <RocketSection title="Second Stage">
        <StageSection data={secondStageData} />
      </RocketSection>

      <CarouselComponent data={carouselData1} />

      <RocketSection title={rocket.engines.type} subtitle="Engine">
        <StageSection data={engineGeneralData} />
        <CarouselComponent data={carouselData2} />
      </RocketSection>

      <StyledLink href={rocket.wikipedia} className="inline-flex items-center">
        <ExternalLink className="h-5 w-5 md:h-7 md:w-7 mr-2 md:stroke-1" />
        Wikipedia
      </StyledLink>

      <RocketCarousel images={rocket.flickr_images} name={rocket.name} />
    </section>
  );
}
