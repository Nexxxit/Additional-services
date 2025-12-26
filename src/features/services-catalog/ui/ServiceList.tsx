import type { ToggleServiceHandler, Service } from "../model/types.ts";
import ServiceCard from "./ServiceCard.tsx";

type ServiceListProps = {
  services: Service[];
  onToggle: ToggleServiceHandler;
  selectedIds: string[];
};

export default function ServiceList({
  services,
  onToggle,
  selectedIds,
}: ServiceListProps) {
  return (
    <section>
      <ul
        className={
          "flex flex-col gap-1 max-h-[60vh] sm:max-h-128 overflow-y-auto pr-1"
        }
      >
        {services.map((service) => {
          const selected = selectedIds.includes(service.id);
          return (
            <li key={service.id}>
              <ServiceCard
                service={service}
                onToggle={onToggle}
                isSelected={selected}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
