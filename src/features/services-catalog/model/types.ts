export type Service = {
    id: string;
    title: string;
    price: number;
};

export type AddServiceHandler = (serviceId: string) => void;