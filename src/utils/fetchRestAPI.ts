import { cookies } from 'next/headers';

interface CustomRequestInit extends RequestInit {
  parseResponse?: boolean;
}

class httpFetch {
  private _baseURL: string;
  private _headers: Record<string, string>;

  constructor(options: { baseURL?: string; headers?: Record<string, string> } = {}) {

    this._baseURL = options.baseURL || process.env.API_ENDPOINT || '';
    this._headers = options.headers || {};

    const cookieStore = cookies();

    if (cookieStore.has('token')) {
      const token = cookieStore.get('token')?.value
      this.setBearerAuth(token)
    }

  }

  private async _fetchJSON(endpoint: string, options: CustomRequestInit = {}): Promise<any> {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
      cache: 'force-cache',
      next: { revalidate: 900 } // 15 minutes
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  }

  public setHeader(key: string, value: string): this {
    this._headers[key] = value;
    return this;
  }

  public getHeader(key: string): string | undefined {
    return this._headers[key];
  }

  public setBearerAuth(token: string | undefined): this {
    this._headers.Authorization = `Bearer ${token}`;
    return this;
  }

  public get(endpoint: string, options: CustomRequestInit = {}): Promise<any> {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "GET"
    });
  }

  public post(endpoint: string, body?: any, options: CustomRequestInit = {}): Promise<any> {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: "POST"
    });
  }

  public put(endpoint: string, body?: any, options: CustomRequestInit = {}): Promise<any> {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: "PUT"
    });
  }

  public patch(endpoint: string, operations: any, options: CustomRequestInit = {}): Promise<any> {
    return this._fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      body: JSON.stringify(operations),
      method: "PATCH"
    });
  }

  public delete(endpoint: string, options: CustomRequestInit = {}): Promise<any> {
    return this._fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      method: "DELETE"
    });
  }
}

export default httpFetch;
