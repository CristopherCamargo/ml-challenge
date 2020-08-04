class Api {
  private url: string;
  private method: string;
  private urlParams: string | undefined;
  private baseURI: string;

  constructor(url: string, method: string, params?: string | undefined) {
    this.url = url;
    this.method = method;
    this.urlParams = params;

    this.baseURI = "http://localhost:5000/api";
  }

  public async fetch() {
    const result = await fetch(
      `${this.baseURI}${this.url}?${this.urlParams || ""}`,
      {
        method: this.method
      }
    );

    if (result.status !== 200) {
      const status = result.status;
      const data = await result.json();
      return {
        ...data,
        status
      };
    }

    return result.json();
  }
}

export default Api;
