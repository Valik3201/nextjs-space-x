import type { Rocket } from "@/app/type";

export const prepareOverviewData = (rocket: Rocket) => {
  const data = [
    {
      label: "Height",
      value:
        rocket.height.meters != null ? `${rocket.height.meters} m` : undefined,
      unit: rocket.height.feet != null ? `${rocket.height.feet} ft` : undefined,
    },
    {
      label: "Diameter",
      value:
        rocket.diameter.meters != null
          ? `${rocket.diameter.meters} m`
          : undefined,
      unit:
        rocket.diameter.feet != null ? `${rocket.diameter.feet} ft` : undefined,
    },
    {
      label: "Mass",
      value: rocket.mass.kg != null ? `${rocket.mass.kg} kg` : undefined,
      unit: rocket.mass.lb != null ? `${rocket.mass.lb} lb` : undefined,
    },
    ...rocket.payload_weights.map((payload) => ({
      label: payload.name,
      value: payload.kg != null ? `${payload.kg} kg` : undefined,
      unit: payload.lb != null ? `${payload.lb} lb` : undefined,
    })),
  ];

  return data.filter(
    (item) => item.value !== undefined || item.unit !== undefined
  );
};

export const prepareStageData = (stage: any) => {
  const data = [
    { label: "Reusable", value: stage.reusable ? "Yes" : "No" },
    {
      label: "Number Of Engines",
      value: stage.engines != null ? stage.engines.toString() : undefined,
    },
    {
      label: "Fuel Amount Tons",
      value:
        stage.fuel_amount_tons != null
          ? stage.fuel_amount_tons.toString()
          : undefined,
    },
    {
      label: "Burn Time Sec",
      value:
        stage.burn_time_sec != null
          ? stage.burn_time_sec.toString()
          : undefined,
    },
    {
      label: "Thrust",
      value: stage.thrust?.kN != null ? `${stage.thrust.kN} kN` : undefined,
      unit: stage.thrust?.lbf != null ? `${stage.thrust.lbf} lbf` : undefined,
    },
  ];

  return data.filter(
    (item) => item.value !== undefined || item.unit !== undefined
  );
};

export const preparePayloadData = (payloads: any) => {
  const data = [
    { label: "Option 1", value: payloads.option_1 ?? undefined },
    {
      label: "Composite Fairing Height",
      value:
        payloads.composite_fairing?.height.meters != null
          ? `${payloads.composite_fairing.height.meters} m`
          : undefined,
      unit:
        payloads.composite_fairing?.height.feet != null
          ? `${payloads.composite_fairing.height.feet} ft`
          : undefined,
    },
    {
      label: "Composite Fairing Diameter",
      value:
        payloads.composite_fairing?.diameter.meters != null
          ? `${payloads.composite_fairing.diameter.meters} m`
          : undefined,
      unit:
        payloads.composite_fairing?.diameter.feet != null
          ? `${payloads.composite_fairing.diameter.feet} ft`
          : undefined,
    },
  ];

  return data.filter(
    (item) => item.value !== undefined || item.unit !== undefined
  );
};

export const prepareLandingLegsData = (landingLegs: any) =>
  [
    {
      label: "Number of Landing Legs",
      value:
        landingLegs.number != null ? landingLegs.number.toString() : undefined,
    },
    {
      label: "Material",
      value: landingLegs.material ?? "N/A",
    },
  ].filter((item) => item.value !== undefined);

export const prepareEngineSeaLevelData = (engines: any) => {
  const data = [
    {
      label: "ISP",
      value:
        engines.isp?.sea_level != null
          ? engines.isp.sea_level.toString()
          : undefined,
    },
    {
      label: "Thrust",
      value:
        engines.thrust_sea_level?.kN != null
          ? `${engines.thrust_sea_level.kN} kN`
          : undefined,
      unit:
        engines.thrust_sea_level?.lbf != null
          ? `${engines.thrust_sea_level.lbf} lbf`
          : undefined,
    },
  ];

  return data.filter(
    (item) => item.value !== undefined || item.unit !== undefined
  );
};

export const prepareEngineVacuumData = (engines: any) => {
  const data = [
    {
      label: "ISP",
      value:
        engines.isp?.vacuum != null ? engines.isp.vacuum.toString() : undefined,
    },
    {
      label: "Thrust",
      value:
        engines.thrust_vacuum?.kN != null
          ? `${engines.thrust_vacuum.kN} kN`
          : undefined,
      unit:
        engines.thrust_vacuum?.lbf != null
          ? `${engines.thrust_vacuum.lbf} lbf`
          : undefined,
    },
  ];

  return data.filter(
    (item) => item.value !== undefined || item.unit !== undefined
  );
};

export const prepareEngineGeneralData = (engines: any) => {
  const data = [
    {
      label: "Number Of Engines",
      value: engines.number != null ? engines.number.toString() : undefined,
    },
    { label: "Type", value: engines.type ?? undefined },
    {
      label: "Version",
      value: engines.version !== "" ? engines.version : undefined,
    },
    { label: "Layout", value: engines.layout ?? undefined },
    {
      label: "Engine Loss Max",
      value:
        engines.engine_loss_max != null
          ? engines.engine_loss_max.toString()
          : undefined,
    },
    {
      label: "Propellant",
      value:
        engines.propellant_1 && engines.propellant_2
          ? `${engines.propellant_1} / ${engines.propellant_2}`
          : undefined,
    },
    {
      label: "Thrust to Weight",
      value:
        engines.thrust_to_weight != null
          ? engines.thrust_to_weight.toString()
          : undefined,
    },
  ];

  return data.filter((item) => item.value !== undefined);
};
