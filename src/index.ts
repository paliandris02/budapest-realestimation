import type EstimationRequest from "./EstimationRequest";

const district = document.getElementById("district") as HTMLSelectElement;
const area_size = document.getElementById("area_size") as HTMLSelectElement;
const floors = document.getElementById("floors") as HTMLSelectElement;
const building_material = document.getElementById(
  "building_material"
) as HTMLSelectElement;
const type_of_heating = document.getElementById(
  "type_of_heating"
) as HTMLSelectElement;
const condition_of_real_estate = document.getElementById(
  "condition_of_real_estate"
) as HTMLSelectElement;
const convenience_level = document.getElementById(
  "convenience_level"
) as HTMLSelectElement;
const year_built = document.getElementById("year_built") as HTMLSelectElement;
const ground_area_size = document.getElementById(
  "ground_area_size"
) as HTMLSelectElement;
const orientation = document.getElementById("orientation") as HTMLSelectElement;
const ownership_status = document.getElementById(
  "ownership_status"
) as HTMLSelectElement;
const listing_type = document.getElementById(
  "listing_type"
) as HTMLSelectElement;
const property_type = document.getElementById(
  "property_type"
) as HTMLSelectElement;

const resultEl = document.querySelector<HTMLDivElement>(".result");
const form = document.querySelector<HTMLFormElement>(".main-form");
const spinner = document.querySelector<HTMLDivElement>(".spinner");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  spinner?.classList.remove("hidden");
  const requestResult = await sendRequest();
  if (!requestResult?.ok) {
    throw new Error("Error: res is not OK!");
  }
  const data: String = await requestResult?.json();
  console.log(data);

  if (resultEl) {
    spinner?.classList.add("hidden");
    resultEl.textContent = data.toString();
  }
});

async function sendRequest() {
  try {
    const requestBody: EstimationRequest = getInputs();

    const res = await fetch("http://localhost:5000/estimate", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}

function getInputs(): EstimationRequest {
  return {
    district: district.value || "nan",
    area_size: Number(area_size?.value),
    floors: floors.value || "nan",
    building_material: building_material.value || "nan",
    type_of_heating: type_of_heating.value || "nan",
    condition_of_real_estate: condition_of_real_estate.value || "nan",
    convenience_level: convenience_level.value || "nan",
    year_built: year_built.value || "nan",
    ground_area_size: Number(ground_area_size.value) || "nan",
    orientation: orientation.value || "nan",
    ownership_status: ownership_status.value || "nan",
    listing_type: "for-sale",
    property_type: "apartment",
  };
}
