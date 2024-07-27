import type { Rocket } from "@/app/type";

import * as data from "@/lib/rocketDataPreparation";

import { StyledLink } from "@/components/styled-link";
import { RocketBadge } from "@/components/rocket-badge";
import { RocketInfoItem } from "@/components/rocket-info-item";
import { RocketSection } from "@/components/rocket-section";
import { OverviewSection } from "@/components/overview-section";
import { StageSection } from "@/components/stage-section";
import { RocketCarousel } from "@/components/rocket-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, MapPin, CircleDollarSign, ExternalLink } from "lucide-react";

export default function RocketPage({ rocket }: { rocket: Rocket }) {
  const overviewData = data.prepareOverviewData(rocket);
  const firstStageData = data.prepareStageData(rocket.first_stage);
  const secondStageData = data.prepareStageData(rocket.second_stage);
  const payloadData = data.preparePayloadData(rocket.second_stage.payloads);
  const landingLegsData = data.prepareLandingLegsData(rocket.landing_legs);
  const engineGeneralData = data.prepareEngineGeneralData(rocket.engines);
  const engineSeaLevelData = data.prepareEngineSeaLevelData(rocket.engines);
  const engineVacuumData = data.prepareEngineVacuumData(rocket.engines);

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

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-3xl"
      >
        <CarouselContent>
          <CarouselItem>
            <RocketSection subtitle="Payloads">
              <StageSection data={payloadData} />
            </RocketSection>
          </CarouselItem>

          <CarouselItem>
            <RocketSection subtitle="Landing Legs">
              <StageSection data={landingLegsData} />
            </RocketSection>
          </CarouselItem>
        </CarouselContent>

        <div className="inline-flex justify-between w-full py-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <RocketSection title={rocket.engines.type} subtitle="Engine">
        <StageSection data={engineGeneralData} />

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-3xl mt-6"
        >
          <CarouselContent>
            <CarouselItem>
              <RocketSection subtitle="Sea Level">
                <StageSection data={engineSeaLevelData} />
              </RocketSection>
            </CarouselItem>

            <CarouselItem>
              <RocketSection subtitle="Vacuum">
                <StageSection data={engineVacuumData} />
              </RocketSection>
            </CarouselItem>
          </CarouselContent>

          <div className="inline-flex justify-between w-full py-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </RocketSection>

      <StyledLink href={rocket.wikipedia} className="inline-flex items-center">
        <ExternalLink className="h-5 w-5 md:h-7 md:w-7 mr-2 md:stroke-1" />
        Wikipedia
      </StyledLink>

      <RocketCarousel images={rocket.flickr_images} name={rocket.name} />
    </section>
  );
}
