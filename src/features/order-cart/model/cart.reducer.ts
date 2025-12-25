import type { CartAction, CartState } from "./types.ts";

export const initialCartState: CartState = { selectedIds: [] };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "toggle": {
      const exists = state.selectedIds.includes(action.id);
      return exists
        ? { selectedIds: state.selectedIds.filter((id) => id !== action.id) }
        : { selectedIds: [...state.selectedIds, action.id] };
    }
    case "clear": {
      return initialCartState;
    }
    default: {
      return state;
    }
  }
}
