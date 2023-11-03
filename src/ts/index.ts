import type EstimationRequest from "./EstimationRequest";
import getInputs from "./InputHelper";
import Config from "./config";
import { Spinner } from "./Spinner";

const resultEl = document.querySelector<HTMLDivElement>(".result");
const form = document.querySelector<HTMLFormElement>(".main-form");
const defReqSpinner = new Spinner("", resultEl);

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  defReqSpinner.show();

  const requestResult = await sendRequest();

  if (!requestResult?.ok) {
    const errMsg = `Request failed: ${requestResult?.status} ${requestResult?.statusText}`;
    console.error(errMsg);
    defReqSpinner.hide();
    if (resultEl) {
      resultEl.textContent = errMsg;
    }
    return;
  }

  defReqSpinner.hide();

  const data: Promise<Object> = await requestResult?.json();
  console.log(data);

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
    return;
  }
}
