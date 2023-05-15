import FetchData from "@/lib/fetchRestAPI";
import { BookingsOperation, ProductsOperation } from "./type";
import { nextFetchGraphQl } from "@/lib/fetchGraphQl";
import { getBookings } from "./queries";

// Rest API
export async function getProducts(): Promise<ProductsOperation[]> {
  const data = await FetchData.get('/users');
  return data
}
// GraphQL
export async function getBooking({
  page,
  per_page,
}: {
  page: number,
  per_page: number
}): Promise<any[]> {
  const res = await nextFetchGraphQl<BookingsOperation>({
    query: getBookings,
    variables: {
      page,
      per_page,
    }
  });
  return res.body.data.bookings.data;
}