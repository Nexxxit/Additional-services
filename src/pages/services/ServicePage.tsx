import ServiceList from "../../features/services-catalog/ui/ServiceList.tsx";
import { ServicesMock } from "../../features/services-catalog/model/services.mock.ts";
import { useMemo, useReducer } from "react";
import CartSummary from "../../features/order-cart/ui/CartSummary.tsx";
import {
  cartReducer,
  initialCartState,
} from "../../features/order-cart/model/cart.reducer.ts";
import {
  selectSelectedServices,
  selectTotal,
} from "../../features/order-cart/model/selectors.ts";

export default function ServicePage() {
  const services = ServicesMock;
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const onToggle = (id: string) => dispatch({ type: "toggle", id });

  const selectedServices = useMemo(
    () => selectSelectedServices(services, cart),
    [cart, services],
  );

  const total = selectTotal(services, cart);

  return (
    <main className={"container mx-auto grid grid-cols-2"}>
      <ServiceList
        services={services}
        onToggle={onToggle}
        selectedIds={cart.selectedIds}
      />
      <CartSummary
        selectedServices={selectedServices}
        total={total}
        onToggle={onToggle}
      />
    </main>
  );
}
