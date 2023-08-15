class Config {
  private readonly API_URL = "https://szitakoto.azurewebsites.net/";
  private readonly ENDPOINT = "estimate";
  // WARNING: LOCALHOST:8080 IS ONLY ADDED TO THIS PATH IN THE CORS CONFIG
  public getUrl(): string {
    return this.API_URL + this.ENDPOINT;
  }
}

export default new Config();
