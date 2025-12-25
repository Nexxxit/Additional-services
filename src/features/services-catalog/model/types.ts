export type Service = {
  id: string;
  title: string;
  price: number;
};

export type ToggleServiceHandler = (serviceId: string) => void;
