import type {
  Service,
  ToggleServiceHandler,
} from "../../services-catalog/model/types.ts";
import Button from "../../../shared/ui/Button.tsx";

type CartSummaryProps = {
  selectedServices: Service[];
  total: number;
  onToggle: ToggleServiceHandler;
};

export default function CartSummary({
  selectedServices,
  total,
  onToggle,
}: CartSummaryProps) {
  return (
    <section>
      <ul>
        {selectedServices.map((service) => (
          <li key={service.id}>
            <div>
              <p>{service.title}</p>
              <p>{service.price}</p>
            </div>
            <Button onClick={() => onToggle(service.id)}>Убрать</Button>
          </li>
        ))}
      </ul>
      <p>
        Итого: <span>{total}</span>
      </p>
    </section>
  );
}
