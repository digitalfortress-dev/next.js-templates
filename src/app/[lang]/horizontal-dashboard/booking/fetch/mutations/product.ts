
export const createCartMutation = /* GraphQL */ `
  mutation createCartMutation($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
`;
