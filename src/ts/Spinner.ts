export class Spinner {
  private spinnerDiv = document.createElement("div");
  private spinnerTextSpan = document.createElement("span");
  constructor(spinnerText: string, elementToInsertInto: any) {
    this.spinnerTextSpan.textContent = spinnerText;
    this.spinnerDiv.appendChild(this.spinnerTextSpan);
    this.spinnerDiv.classList.add(
      "spinner-border",
      "text-primary",
      "hidden",
      "spinner"
    );
    elementToInsertInto.appendChild(this.spinnerDiv);
    // this.spinnerTextSpan.classList.add("visually-hidden");
  }

  hide(): void {
    this.spinnerDiv?.classList.add("hidden");
  }
  show(): void {
    this.spinnerDiv?.classList.remove("hidden");
  }
}
