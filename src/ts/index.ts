import type EstimationRequest from "./EstimationRequest";
import getInputs from "./InputHelper";
import Config from "./config";
import spinner from "./spinner";

const resultEl = document.querySelector<HTMLDivElement>(".result");
const form = document.querySelector<HTMLFormElement>(".main-form");
spinner.hide();

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  spinner.show();

  const requestResult = await sendRequest();

  if (!requestResult?.ok) {
    const errMsg = `Request failed: ${requestResult?.status} ${requestResult?.statusText}`;
    console.error(errMsg);
    spinner.hide();
    if (resultEl) {
      resultEl.textContent = errMsg;
    }
    return;
  }

  spinner.hide();

  const data: Promise<Object> = await requestResult?.json();

  if (resultEl) {
    resultEl.textContent = data.toString();
  }
});

async function sendRequest() {
  try {
    const requestBody: EstimationRequest = getInputs();

    const res = await fetch(Config.getUrl(), {
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
