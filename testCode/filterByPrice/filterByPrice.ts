type Product = {
  name: string;
  price: number;
  quantity: number;
};

type ProductWithValue = {
  name: string;
  value: number;
};

const products: Product[] = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 20 },
  { name: "Keyboard", price: 50, quantity: 10 },
  { name: "Monitor", price: 200, quantity: 3 },
  { name: "USB Cable", price: 10, quantity: 15 },
];

const filterByPrice = (products: Product[], minPrice: number): Product[] =>
  products.filter((product) => product.price > minPrice);

const calculateProductValue = (products: Product[]): ProductWithValue[] =>
  products.map((product) => ({
    name: product.name,
    value: product.price * product.quantity,
  }));

const sortByValueDescending = (
  products: ProductWithValue[]
): ProductWithValue[] => [...products].sort((a, b) => b.value - a.value);

const formatProducts = (products: ProductWithValue[]): string[] =>
  products.map((product) => `${product.name}: $${product.value}`);

const processedProducts = formatProducts(
  sortByValueDescending(calculateProductValue(filterByPrice(products, 20)))
);

console.log(processedProducts);

export {
  products,
  filterByPrice,
  calculateProductValue,
  sortByValueDescending,
  formatProducts,
};
