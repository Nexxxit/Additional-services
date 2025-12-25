export type CartState = {
  selectedIds: string[];
};

export type CartAction = { type: "toggle"; id: string } | { type: "clear" };
