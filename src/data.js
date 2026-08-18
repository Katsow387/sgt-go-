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
export const DRIVER_DELIVERIES = [
  {
    id: "SGT-48312",
    pickup: "Unit 29, Pongola River Drive, Norkem Park",
    dropoff: "44 Rivonia Rd, Sandton",
    status: "picked", // pending, picked, delivered
    eta: "14 min",
    customer: "Dimakatso L.",
  },
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

// ---------- Merchant ----------
export const MERCHANT = {
  business: "Khumalo Retail (Pty) Ltd",
  contact: "Lindiwe Khumalo",
  tier: "Growth membership",
};

export const MERCHANT_STATS = {
  monthSpend: "R 18 420",
  openOrders: 3,
  savedVsRetail: "12%",
};

export const MERCHANT_ORDERS = [
  { id: "SGT-M-1042", supplier: "Tiger Brands", date: "15 Aug", status: "In transit", total: "R 4 280.00", items: 6 },
  { id: "SGT-M-1038", supplier: "Clover", date: "12 Aug", status: "Delivered", total: "R 2 150.00", items: 4 },
  { id: "SGT-M-1031", supplier: "Nampak", date: "8 Aug", status: "Delivered", total: "R 6 990.00", items: 12 },
  { id: "SGT-M-1024", supplier: "Reckitt", date: "2 Aug", status: "Cancelled", total: "R 0.00", items: 0 },
];

export const PROMOTIONS = [
  { id: "p1", title: "10% off Clover dairy orders", expires: "Ends 22 Aug", supplier: "Clover" },
  { id: "p2", title: "Free delivery over R 5 000", expires: "Ends 31 Aug", supplier: "SGT GO" },
];

// ---------- Supplier ----------
export const SUPPLIER = {
  business: "Clover SA — Kempton Depot",
  contact: "Sipho Nkosi",
};

export const SUPPLIER_STATS = {
  pendingOrders: 5,
  monthRevenue: "R 142 600",
  fulfilmentRate: "97%",
};

export const INCOMING_ORDERS = [
  { id: "SGT-S-8821", merchant: "Khumalo Retail", items: 6, total: "R 4 280.00", status: "pending" },
  { id: "SGT-S-8819", merchant: "Norkem Traders", items: 3, total: "R 1 120.00", status: "pending" },
  { id: "SGT-S-8814", merchant: "Boksburg Wholesale", items: 10, total: "R 7 940.00", status: "accepted" },
];

export const INVENTORY = [
  { id: "i1", name: "Full Cream Milk 1L (x12)", price: "R 189.00", stock: 240 },
  { id: "i2", name: "Cheddar Cheese 400g (x10)", price: "R 410.00", stock: 86 },
  { id: "i3", name: "Yoghurt 175g (x24)", price: "R 265.00", stock: 12 },
];

// ---------- Admin ----------
export const ADMIN_STATS = {
  activeSuppliers: 24,
  activeMerchants: 118,
  activeDrivers: 37,
  deliveriesToday: 212,
  gmvMonth: "R 2.4M",
};

export const SUPPLIERS_LIST = [
  { id: "sup1", name: "Clover SA", region: "Kempton Park", status: "Active" },
  { id: "sup2", name: "Tiger Brands", region: "Johannesburg", status: "Active" },
  { id: "sup3", name: "Nampak", region: "Germiston", status: "Pending review" },
];

export const MERCHANTS_LIST = [
  { id: "mer1", name: "Khumalo Retail", region: "Norkem Park", status: "Active" },
  { id: "mer2", name: "Boksburg Wholesale", region: "Boksburg", status: "Active" },
];

export const DISPUTES = [
  { id: "d1", ref: "SGT-M-1024", reason: "Order cancelled, refund pending", status: "Open" },
  { id: "d2", ref: "SGT-S-8814", reason: "Short delivery — 2 items missing", status: "Investigating" },
];
