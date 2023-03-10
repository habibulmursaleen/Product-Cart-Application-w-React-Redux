import initialState from "../initialState";
import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DECREASE,
  DELETE,
  INCREASE,
} from "./actionTypes";

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.productId, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            productId: nextProductId(state.products),
            productName: action.payload.productName,
            category: action.payload.category,
            imageUrl: action.payload.imageUrl,
            price: action.payload.price,
            quantity: action.payload.quantity,
          },
        ],
      };

    case ADD_TO_CART:
      const product = state.products.find(
        (product) => product.productId === action.payload.productId
      );

      const cartItem = state.cartItems[product.productId];

      if (product.quantity > 0 && cartItem) {
        return {
          ...state,
          products: [
            ...state.products
              .filter(
                (product) => product.productId !== action.payload.productId
              )
              .concat({ ...product, quantity: product.quantity - 1 })
              .sort((a, b) => a.productId - b.productId),
          ],
          cartItems: {
            ...state.cartItems,
            [product.productId]: {
              ...cartItem,
              cartQuantity: cartItem.cartQuantity + 1,
            },
          },
          numberOfCarts: state.numberOfCarts + 1,
          subtotal: state.subtotal + parseFloat(product.price),
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products
              .filter(
                (product) => product.productId !== action.payload.productId
              )
              .concat({ ...product, quantity: product.quantity - 1 })
              .sort((a, b) => a.productId - b.productId),
          ],
          cartItems: {
            ...state.cartItems,
            [product.productId]: {
              ...action.payload,
              cartQuantity: 1,
            },
          },
          numberOfCarts: state.numberOfCarts + 1,
          subtotal: state.subtotal + parseFloat(product.price),
        };
      }

    case INCREASE:
      const productId = action.payload;

      if (state.products[productId]?.quantity < 0) {
        return { ...state }; // Don't update the state if quantity exceeds product quantity
      } else {
        const existingCartItem = state.cartItems[productId];
        if (existingCartItem) {
          return {
            ...state,
            products: state.products.map((product) => {
              if (product.productId === parseInt(productId)) {
                return {
                  ...product,
                  quantity: product.quantity - 1,
                };
              } else {
                return product;
              }
            }),
            cartItems: {
              ...state.cartItems,
              [productId]: {
                ...existingCartItem,
                cartQuantity: existingCartItem.cartQuantity + 1,
              },
            },
            numberOfCarts: state.numberOfCarts + 1,
            subtotal: state.subtotal + parseFloat(existingCartItem.price),
          };
        } else {
          return { ...state }; // Don't update the state if the cart item doesn't exist
        }
      }

    case DECREASE:
      if (state.cartItems[action.payload]?.cartQuantity === 0) {
        return { ...state }; // Don't update the state if quantity exceeds product quantity
      } else {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.productId === parseInt(action.payload)) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              return product;
            }
          }),
          cartItems: {
            ...state.cartItems,
            [action.payload]: {
              ...state.cartItems[action.payload],
              cartQuantity: state.cartItems[action.payload].cartQuantity - 1,
            },
          },
          numberOfCarts: state.numberOfCarts - 1,
          subtotal:
            state.subtotal - parseFloat(state.cartItems[action.payload].price),
        };
      }

    case DELETE:
      const deletedCartItem = state.cartItems[action.payload];
      const deletedProduct = state.products.find(
        (product) => product.productId === parseInt(action.payload)
      );

      const deletedTotal =
        parseFloat(deletedProduct.price) *
        parseFloat(deletedCartItem.cartQuantity);

      const deletedSubtotal = state.subtotal - parseFloat(deletedTotal);

      if (deletedCartItem) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.productId === parseInt(action.payload)
              ? {
                  ...product,
                  quantity: product.quantity + deletedCartItem.cartQuantity,
                }
              : product
          ),
          cartItems: Object.entries(state.cartItems)
            .filter(([key, value]) => key !== action.payload)
            .reduce(
              (newCartItems, [key, value]) => ({
                ...newCartItems,
                [key]: value,
              }),
              {}
            ),
          numberOfCarts: state.numberOfCarts - deletedCartItem.cartQuantity,
          subtotal: deletedSubtotal,
        };
      } else {
        return { ...state }; // Don't update the state if the product to be deleted doesn't exist
      }

    default:
      return state;
  }
};

export default reducer;
