import type { CartState } from "./types.ts";
import type { Service } from "../../services-catalog/model/types.ts";

export function selectSelectedServices(services: Service[], cart: CartState) {
  return services.filter((s) => cart.selectedIds.includes(s.id));
}

export function selectTotal(services: Service[], cart: CartState) {
  return selectSelectedServices(services, cart).reduce(
    (sum, s) => sum + s.price,
    0,
  );
}
