export type Edge<T> = {
  node: T;
};

export type Connection<T> = {
  data: Array<Edge<T>>;
};

export type ProductsOperation = {
  data: {
    bookings: Connection<any[]>;
  };
  variables: {
    page: number,
    per_page: number,
  };
};