export type Service = {
    id: string;
    title: string;
    price: number;
};

export type ServiceCardProps = {
    service: Service;
    onAdd: (serviceId: string) => void;
}