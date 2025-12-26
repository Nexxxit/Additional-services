import type {
  Service,
  ToggleServiceHandler,
} from "../../services-catalog/model/types.ts";
import Button from "../../../shared/ui/Button.tsx";
import { CloseIcon } from "../../../shared/ui/icons/CloseIcon.tsx";

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
      <ul
        className={
          "flex flex-col gap-3 border-y-2 p-2 sm:max-h-128 max-h-64 h-full overflow-y-auto pr-1"
        }
      >
        {selectedServices.length > 0 ? (
          selectedServices.map((service) => (
            <li
              key={service.id}
              className={"flex items-center justify-between gap-3"}
            >
              <div
                className={
                  "flex justify-between flex-1 min-w-0 bg-zinc-200 px-3 py-2 rounded-2xl"
                }
              >
                <p className={"min-w-0 flex-1 wrap-anywhere"}>
                  {service.title}
                </p>
                <p className={"shrink-0"}>{service.price} ₽</p>
              </div>
              <Button
                className={"btn-cart btn-cart--remove"}
                onClick={() => onToggle(service.id)}
              >
                <CloseIcon />
              </Button>
            </li>
          ))
        ) : (
          <li className="text-center text-base sm:text-lg">
            Дополнительные услуги не выбраны
          </li>
        )}
      </ul>
      <p className={"text-end font-semibold text-lg sm:text-xl"}>
        Итого: <span className={"font-normal"}>{total} ₽</span>
      </p>
    </section>
  );
}
