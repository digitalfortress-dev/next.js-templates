export type ProductsOperation = {
  createdAt: string,
  name: string,
  avatar: string,
  id: string
};

export type Edge<T> = {
  node: T;
};

export type Connection<T> = {
  data: Array<Edge<T>>;
};

export type BookingsOperation = {
  data: {
    bookings: Connection<any[]>;
  };
  variables: {
    page: number,
    per_page: number,
  };
};