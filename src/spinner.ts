class Spinner {
  private spinner = document.querySelector<HTMLDivElement>(".spinner");
  hide() {
    this.spinner?.classList.add("hidden");
  }
  show() {
    this.spinner?.classList.remove("hidden");
  }
}

export default new Spinner();
