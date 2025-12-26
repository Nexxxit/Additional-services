import type { ToggleServiceHandler, Service } from "../model/types.ts";
import Button from "../../../shared/ui/Button.tsx";
import { CheckIcon } from "../../../shared/ui/icons/CheckIcon.tsx";
import { PlusIcon } from "../../../shared/ui/icons/PlusIcon.tsx";

type ServiceCardProps = {
  service: Service;
  onToggle: ToggleServiceHandler;
  isSelected: boolean;
};

export default function ServiceCard({
  service,
  onToggle,
  isSelected,
}: ServiceCardProps) {
  return (
    <article className={"card"}>
      <div className={"card-info"}>
        <h3 className={"card-title"}>{service.title}</h3>
        <p className={"card-price"}>{service.price} ₽</p>
      </div>
      <Button
        className={`btn-service ${isSelected ? "btn-service--remove" : "btn-service--add"}`}
        onClick={() => onToggle(service.id)}
      >
        {isSelected ? <CheckIcon /> : <PlusIcon />}
      </Button>
    </article>
  );
}
