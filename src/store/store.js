import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import product from "./reducer/card-reducer"
import { loadState, saveState } from "../config/storage";
import {
  addProduct,
  decrimentProduct,
  deleteProduct,
  incrementProduct,
  totalSumm,
} from "./reducer/card-reducer";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    addProduct,
    incrementProduct,
    decrimentProduct,
    deleteProduct
  ),
  effect: (_, listenerApi) => {
    listenerApi.dispatch(totalSumm());
  },
});

export const store = configureStore({
  reducer: {
    product,
  },
  preloadedState: {
    product: loadState("product"),
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(listenerMiddleware.middleware)
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
