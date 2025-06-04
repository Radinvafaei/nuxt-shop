import AbstractApi from '../abstract.api';
import { NetworkResponse } from '../interface.global';
import { IProduct } from './interface';

export default class ProductsService extends AbstractApi {
  constructor() {
    super(`products`);
  }

  public async getAll(): Promise<NetworkResponse<IProduct[]>> {
    return this.http.request({
      method: `GET`,
      url: this.url,
    });
  }

  public async getById(id: number): Promise<NetworkResponse<IProduct>> {
    return this.http.request({
      method: `GET`,
      url: `/${this.url}/${id}`,
    });
  }
}
