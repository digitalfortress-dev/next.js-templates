export const getBookings = /* GraphQL */ `
query getBookings($page: Int, $per_page: Int) {
  bookings(page: $page, per_page: $per_page){
    data {
      full_address
      booking_time
      status
      schedule
      created_at
      updated_at
      service_id
    }
    page
    next_page
    per_page
    total
  }
}
`;