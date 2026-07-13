export const RETAILERS = [
  { name: "Game", color: "#E4007C" },
  { name: "Builders Warehouse", color: "#F5A623" },
  { name: "Makro", color: "#004990" },
  { name: "Walmart", color: "#0071CE" },
];

export const SAVED_PLACES = [
  { id: "home", label: "Home", detail: "Unit 29, Pongola River Drive, Norkem Park" },
  { id: "work", label: "Work", detail: "44 Rivonia Rd, Sandton" },
];

export const STATUS_STEPS = [
  { key: "placed", label: "Order placed" },
  { key: "picked", label: "Picked up" },
  { key: "transit", label: "In transit" },
  { key: "delivered", label: "Delivered" },
];

export const PAST_ORDERS = [
  {
    id: "SGT-48210",
    retailer: "Makro",
    date: "10 Jul",
    status: "Delivered",
    total: "R 640.00",
  },
  {
    id: "SGT-48177",
    retailer: "Builders Warehouse",
    date: "6 Jul",
    status: "Delivered",
    total: "R 1 210.00",
  },
  {
    id: "SGT-48120",
    retailer: "Game",
    date: "29 Jun",
    status: "Cancelled",
    total: "R 0.00",
  },
];

export const DRIVER = {
  name: "Thabo M.",
  vehicle: "Toyota Hilux · NP 44 XZ GP",
  rating: 4.9,
  eta: "14 min",
};
