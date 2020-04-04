import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { print } from 'graphql/language/printer';

import { search } from '../GraphQl/queries/games';

abstract class Fetch {
  private static client: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
  });

  private static async axiosResponse(promise: AxiosPromise) {
    const response = await promise;
    return response.data.data;
  }

  public static search(term: string): Promise<any> {
    const query = print(search);

    return this.axiosResponse(
      this.client.post('', { query, variables: { term } },),
    );
  }
}

export default Fetch;
