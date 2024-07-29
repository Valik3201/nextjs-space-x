import type { Rocket } from "@/app/type";

export const prepareOverviewData = (rocket: Rocket) => {
  const data = [
    {
      label: "Height",
      value: rocket.height.meters ? `${rocket.height.meters} m` : "",
      unit: rocket.height.feet ? `${rocket.height.feet} ft` : "",
    },
    {
      label: "Diameter",
      value: rocket.diameter.meters ? `${rocket.diameter.meters} m` : "",
      unit: rocket.diameter.feet ? `${rocket.diameter.feet} ft` : "",
    },
    {
      label: "Mass",
      value: rocket.mass.kg ? `${rocket.mass.kg} kg` : "",
      unit: rocket.mass.lb ? `${rocket.mass.lb} lb` : "",
    },
    ...rocket.payload_weights.map((payload) => ({
      label: payload.name,
      value: payload.kg ? `${payload.kg} kg` : "",
      unit: payload.lb ? `${payload.lb} lb` : "",
    })),
  ];

  return data.filter((item) => item.value || item.unit);
};

export const prepareStageData = (stage: any) => {
  const data = [
    { label: "Reusable", value: stage.reusable ? "Yes" : "No" },
    {
      label: "Number Of Engines",
      value: stage.engines ? stage.engines.toString() : "",
    },
    {
      label: "Fuel Amount Tons",
      value: stage.fuel_amount_tons ? stage.fuel_amount_tons.toString() : "",
    },
    {
      label: "Burn Time Sec",
      value: stage.burn_time_sec ? stage.burn_time_sec.toString() : "",
    },
    {
      label: "Thrust",
      value: stage.thrust?.kN ? `${stage.thrust.kN} kN` : "",
      unit: stage.thrust?.lbf ? `${stage.thrust.lbf} lbf` : "",
    },
  ];

  return data.filter((item) => item.value || item.unit);
};

export const preparePayloadData = (payloads: any) => {
  const data = [
    { label: "Option 1", value: payloads.option_1 ?? "" },
    {
      label: "Composite Fairing Height",
      value: payloads.composite_fairing?.height.meters
        ? `${payloads.composite_fairing.height.meters} m`
        : "",
      unit: payloads.composite_fairing?.height.feet
        ? `${payloads.composite_fairing.height.feet} ft`
        : "",
    },
    {
      label: "Composite Fairing Diameter",
      value: payloads.composite_fairing?.diameter.meters
        ? `${payloads.composite_fairing.diameter.meters} m`
        : "",
      unit: payloads.composite_fairing?.diameter.feet
        ? `${payloads.composite_fairing.diameter.feet} ft`
        : "",
    },
  ];

  return data.filter((item) => item.value || item.unit);
};

export const prepareLandingLegsData = (landingLegs: any) =>
  [
    {
      label: "Number of Landing Legs",
      value: landingLegs.number ? landingLegs.number.toString() : "",
    },
    {
      label: "Material",
      value: landingLegs.material ?? "N/A",
    },
  ].filter((item) => item.value);

export const prepareEngineSeaLevelData = (engines: any) => {
  const data = [
    {
      label: "ISP",
      value: engines.isp?.sea_level ? engines.isp.sea_level.toString() : "",
    },
    {
      label: "Thrust",
      value: engines.thrust_sea_level?.kN
        ? `${engines.thrust_sea_level.kN} kN`
        : "",
      unit: engines.thrust_sea_level?.lbf
        ? `${engines.thrust_sea_level.lbf} lbf`
        : "",
    },
  ];

  return data.filter((item) => item.value || item.unit);
};

export const prepareEngineVacuumData = (engines: any) => {
  const data = [
    {
      label: "ISP",
      value: engines.isp?.vacuum ? engines.isp.vacuum.toString() : "",
    },
    {
      label: "Thrust",
      value: engines.thrust_vacuum?.kN ? `${engines.thrust_vacuum.kN} kN` : "",
      unit: engines.thrust_vacuum?.lbf
        ? `${engines.thrust_vacuum.lbf} lbf`
        : "",
    },
  ];

  return data.filter((item) => item.value || item.unit);
};

export const prepareEngineGeneralData = (engines: any) => {
  const data = [
    {
      label: "Number Of Engines",
      value: engines.number ? engines.number.toString() : "",
    },
    { label: "Type", value: engines.type ?? "" },
    {
      label: "Version",
      value: engines.version ? engines.version : "",
    },
    { label: "Layout", value: engines.layout ?? "" },
    {
      label: "Engine Loss Max",
      value: engines.engine_loss_max ? engines.engine_loss_max.toString() : "",
    },
    {
      label: "Propellant",
      value:
        engines.propellant_1 && engines.propellant_2
          ? `${engines.propellant_1} / ${engines.propellant_2}`
          : "",
    },
    {
      label: "Thrust to Weight",
      value: engines.thrust_to_weight
        ? engines.thrust_to_weight.toString()
        : "",
    },
  ];

  return data.filter((item) => item.value);
};
