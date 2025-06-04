import HttpClient, { userClient } from 'http-client';

export default abstract class AbstractApi {
  protected constructor(
    protected readonly url: string,
    protected readonly http: HttpClient = userClient,
  ) {}
}
