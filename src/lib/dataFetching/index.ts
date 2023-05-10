import { nextFetchGraphQl } from '../fetchGraphQl';
import {
  getBookings
} from './queries/product';
import { ProductsOperation } from './types';

export const endpointData = process.env.API_ENDPOINT || '';

export async function getProducts({
  page,
  per_page,
}: {
  page: number,
  per_page: number
}): Promise<any[]> {
  const res = await nextFetchGraphQl<ProductsOperation>({
    query: getBookings,
    variables: {
      page,
      per_page,
    }
  });
  return res.body.data.bookings.data;
}
